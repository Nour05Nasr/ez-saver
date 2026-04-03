import { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';
 
const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}) => {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const lastTransformsRef = useRef(new Map());
 
  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);
 
  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop <= start) return 0;
    if (scrollTop >= end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);
 
  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return { scrollTop: window.scrollY, containerHeight: window.innerHeight };
    }
    const scroller = scrollerRef.current;
    return { scrollTop: scroller.scrollTop, containerHeight: scroller.clientHeight };
  }, [useWindowScroll]);
 
  const getElementOffset = useCallback((element) => {
    if (useWindowScroll) {
      return element.getBoundingClientRect().top + window.scrollY;
    }
    return element.offsetTop;
  }, [useWindowScroll]);
 
  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length) return;
 
    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
 
    const root = useWindowScroll ? document : scrollerRef.current;
    const endElement = root?.querySelector('.scroll-stack-end');
    const endElementTop = endElement ? getElementOffset(endElement) : 0;
    const pinEnd = endElementTop - containerHeight / 2;
 
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
 
      const cardTop = getElementOffset(card);
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
 
      const scaleProgress = calculateProgress(scrollTop, pinStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;
 
      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jTop = getElementOffset(cardsRef.current[j]);
          if (scrollTop >= jTop - stackPositionPx - itemStackDistance * j) topCardIndex = j;
        }
        if (i < topCardIndex) blur = Math.max(0, (topCardIndex - i) * blurAmount);
      }
 
      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }
 
      const last = lastTransformsRef.current.get(i);
      const changed =
        !last ||
        Math.abs(last.translateY - translateY) > 0.05 ||
        Math.abs(last.scale - scale) > 0.0005 ||
        Math.abs(last.rotation - rotation) > 0.05 ||
        Math.abs(last.blur - blur) > 0.05;
 
      if (changed) {
        card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})${rotation ? ` rotate(${rotation}deg)` : ''}`;
        if (blurAmount) card.style.filter = blur > 0 ? `blur(${blur}px)` : '';
        lastTransformsRef.current.set(i, { translateY, scale, rotation, blur });
      }
 
      if (i === cardsRef.current.length - 1) {
        const inView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (inView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!inView) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [
    itemScale, itemStackDistance, stackPosition, scaleEndPosition,
    baseScale, rotationAmount, blurAmount, useWindowScroll, onStackComplete,
    calculateProgress, parsePercentage, getScrollData, getElementOffset,
  ]);
 
  const setupLenis = useCallback(() => {
    const base = {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075,
    };
 
    const lenis = useWindowScroll
      ? new Lenis(base)
      : new Lenis({
          ...base,
          wrapper: scrollerRef.current,
          content: scrollerRef.current?.querySelector('.scroll-stack-inner'),
        });
 
    lenis.on('scroll', updateCardTransforms);
 
    const raf = (time) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);
    lenisRef.current = lenis;
  }, [updateCardTransforms, useWindowScroll]);
 
  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
 
    const cards = Array.from(
      (useWindowScroll ? document : scroller).querySelectorAll('.scroll-stack-card')
    );
    cardsRef.current = cards;
 
    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = 'transform';
      card.style.transformOrigin = 'top center';
    });
 
    setupLenis();
    updateCardTransforms();
 
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (lenisRef.current) lenisRef.current.destroy();
      stackCompletedRef.current = false;
      cardsRef.current = [];
      lastTransformsRef.current.clear();
    };
  }, [
    itemDistance, itemScale, itemStackDistance, stackPosition, scaleEndPosition,
    baseScale, rotationAmount, blurAmount, useWindowScroll,
    setupLenis, updateCardTransforms,
  ]);
 
  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};
 
export default ScrollStack;