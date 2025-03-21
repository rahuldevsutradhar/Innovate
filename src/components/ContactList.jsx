import React from 'react';
import Image from './Image';
import ImageIcon from '../assets/icon.png';

const ContactList = ({text,className}) => {
  return (
    <div className='flex'>
      <Image src={ImageIcon} alt="icon" className='pr-[37px]' /> 
      <p className={`font-paprika font-regular text-[18px] text-[#726E9E] leading-7 w-[320px] ${className}`}>{text}</p>
    </div>
  );
};

export default ContactList;