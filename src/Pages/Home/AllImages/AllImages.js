import React, { useEffect, useState } from 'react';
import AllImagesCard from './AllImagesCard';
import "./AllImages.css"

const AllImages = () => {
  const [allData, setAllData] = useState([]);
//   const [pageCount, setPageCount] = useState(0);

//  const [causes, setCauses] = useState([])
//     const [page, setPage] = useState(0);
//     const [size, setSize] = useState(3);

//     useEffect(() => {
//       fetch(`https://mosque-management.onrender.com/campaigns?page=${page}&size=${size}`)
//           .then(res => res.json())
//           .then(data => setCauses(data));
//   }, [page, size]);
const [count,setCount] = useState(0);
const [cart, setCart] = useState([]);
const [page,setPage] = useState(0);
const [size,setSize] = useState(10);

useEffect(()=>{
 const url =  `http://localhost:5000/imgPagination?page=${page}&size=${size}`;
 fetch(url)
 .then(res=> res.json())
 .then(data=>{
   setCount(data.count);
   setAllData(data.imgPagination);
 })

},[page,size])

const pages = Math.ceil(count/size);



  
  useEffect(()=>{
    fetch('http://localhost:5000/allImage')
    .then(res=>res.json())
    .then(data=>setAllData(data))
  },[])
  return (
    <div >
     <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 py-7 w-full container mx-auto'>
     {
        allData.map(images=><AllImagesCard key={images._id} images={images}></AllImagesCard>)
      }
     </div>
      <div className="pagination">
        <p>Currently Selected Page: {page} and size: {size}</p>
        {
          [...Array(pages).keys()].map(number=><button key={number} className={page === number && 'selected'} onClick={()=>setPage(number)}>{number+1}</button>)

        }
        <select onChange={event=>setSize(event.target.value)} >
          <option value="5">5</option>
          <option value="10" selected>10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>

      </div>
      
    </div>
  );
};

export default AllImages;