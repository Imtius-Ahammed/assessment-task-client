import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import { RMIUploader } from "react-multiple-image-uploader";

const AllImagesCard = ({images, handleAddToClick}) => {
  const [select, setSelect] = useState('');



  // const handleClick=()=>{
  //   saveAs(images.img);
  // }
  
  return (
   
      <div key={images._id} className="card card-compact container mx-auto w-96 bg-base-100 shadow-xl">
        <figure><img src={images.img} alt="Shoes" /></figure>
  
        <div className="card-body">
          <h2 className="card-title">{images.name}</h2>
         <div className=' mt-2'>
         <button className='btn hover:btn-warning  container ' onClick={()=>handleAddToClick(images)}>Select Image</button>
         </div>
          
        
        </div>
      </div>
      
    
  );
};

export default AllImagesCard;