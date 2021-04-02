import React from 'react';


export const ExpanderIcon = ({isOpen}) => {
return <span className='ExpanderIcon'>{isOpen ? '-' : '+'}</span>;
}


export const Expander = ({label, content, id, isOpen, handler}) => {
  return <div className='Expander'>
    <button className='ExpanderLabel' onClick={handler}>{label}<ExpanderIcon isOpen={isOpen} /></button>
    <div className='ExpanderContent' style={{display: `${isOpen ? 'block':'none'}`}}>{content.map(({title=''},i)=>{
      return <div key={i}>{title}</div>
    })}</div>

  </div>;
};

export default Expander;
