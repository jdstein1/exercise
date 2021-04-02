import React, {useState} from 'react';


export const ExpanderIcon = ({isOpen}) => {
return <span className='ExpanderIcon'>{isOpen ? '-' : '+'}</span>;
}


export const Expander = ({label,content,id}) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleLinkClick() {
    setIsOpen(!isOpen)
  }
  return <div className='Expander'>
    <button className='ExpanderLabel' onClick={handleLinkClick}>{label}<ExpanderIcon isOpen={isOpen} /></button>
    <div className='ExpanderContent' style={{display: `${isOpen ? 'block':'none'}`}}>{JSON.stringify(content)}</div>

  </div>;
};

export default Expander;
