import { saveAs } from 'file-saver';
import React from 'react';

const ImgCart = ({item}) => {
  const handleClick=()=>{
    saveAs(item.img)
  }
  console.log(item)
  return (
  
    <div key={item.id} className="card card-compact container mx-auto w-22 bg-base-100 shadow-xl">
    <figure><img src={item.img} alt="Shoes" /></figure>
    <button className='btn btn-success ' onClick={()=>handleClick(item.img)}>Download</button>

  
  </div>
  );
};

export default ImgCart;