import React from 'react';
import CTA1 from '../Common/CTA1';
import CTA2 from '../Common/CTA2';
import H2 from '../Common/H2';
import './DualCard.css';

const DualCard = () => {
  return (
    <div className="card-container">
              <H2 title='What EZ-SAVER Offers?'/>
      {/* Blue Section (Retailers) */}
      <div className="section retailers">
        <div className="content">
            <h2 className='about_h'>About EZ-SAVER</h2>
            <p className='about_p'>Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. </p>
           <CTA2 url='*' title='Know More'/>
        </div>
      </div>

      {/* Orange Section (Shoppers) */}
      <div className="section shoppers">
        <div className="content">
            <h2 className='about_h'>About EZ-SAVER</h2>
            <p className='about_p'>Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. Navigate the store quickly with indoor navigation and AR directions to find items in seconds. </p>
           <CTA1 url='*' title='Know More'/>
        </div>
      </div>
    </div>
  );
};

export default DualCard;