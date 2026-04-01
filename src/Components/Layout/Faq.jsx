import AnimatedList from '../Common/AnimatedList'
import H2 from '../Common/H2';
import faq from '../../Assets/faq.jpg';
import './Faq.css';

  const items = ['1 This is a question ?', '2 This is a question ?', '3 This is a question ?', '4 This is a question ?', '5 This is a question ?', '6 This is a question ?', '7 This is a question ?', '8 This is a question ?', '7 This is a question ?', '8 This is a question ?']; 

const Faq = () => {
    return ( <section className='faq'>
            <H2 title='FAQ'/>
        <div className='faq_section'>
        <AnimatedList
  items={items}
  onItemSelect={(item, index) => console.log(item, index)}
  showGradients={false}
  enableArrowNavigation
  displayScrollbar={false}
/>

<div className='faq_div'>
    <div className='faq_text_div'>
           <h2 className='about_h'>This is a Question ?</h2>
            <p className='faq_p'>Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. </p>
    </div>
<img src={faq} alt="" />
</div>
        </div>
    </section>
     );
}
 
export default Faq;