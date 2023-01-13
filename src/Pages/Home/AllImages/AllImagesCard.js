import React from 'react';

const AllImagesCard = ({images}) => {
  return (
    <div>
      <div key={images._id} className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={images.img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{images.name}</h2>
          
        
        </div>
      </div>
      
    </div>
  );
};

export default AllImagesCard;