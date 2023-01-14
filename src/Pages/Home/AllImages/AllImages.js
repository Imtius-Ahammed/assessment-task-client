import React, { useEffect, useState } from "react";
import AllImagesCard from "./AllImagesCard";
import "./AllImages.css";
import { saveAs } from 'file-saver';
import ImgCart from "./ImgCart";




const AllImages = () => {
  const [allData, setAllData] = useState([]);

  const [count, setCount] = useState(0);

  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [items, setCart] = useState([]);

  const handleAddToClick = (product) => {
    const newCart = [...items, product];
    // console.log(newCart);
    setCart(newCart);
    console.log(newCart);
}

const handleClearToClick = () => {
    const clearItem = [];
    setCart(clearItem);
}

  useEffect(() => {
    const url = `https://assessment-server.vercel.app/imgPagination?page=${page}&size=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setAllData(data.imgPagination);
      });
  }, [page, size]);

  const pages = Math.ceil(count / size);

  useEffect(() => {
    fetch("https://assessment-server.vercel.app/allImage")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);




 


 
  return (
    <div>
      <h1 className="text-center text-5xl font-medium my-10">
        All Images Are Here
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-5 container mx-auto">
        {allData.map((images) => (
          <AllImagesCard key={images._id} images={images} handleAddToClick={handleAddToClick}></AllImagesCard>
        ))}
      </div>
      <div className="pagination">
        <p>
          Currently Selected Page: {page} and size: {size}
        </p>
        {[...Array(pages).keys()].map((number) => (
          <button
            key={number}
            className={page === number && "selected"}
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
        <select onChange={(event) => setSize(event.target.value)}>
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-10 gap-4 py-5 container mx-auto">

                {
                    items.map(item =><ImgCart key={item.id} item={item}></ImgCart>
                  
                    )
                }
                


                
         
            </div>
            <button onClick={handleClearToClick} className=' m-2 btn btn-warning'>Choose Again </button>


    </div>
  );
};

export default AllImages;
