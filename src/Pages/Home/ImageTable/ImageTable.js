import React, { useEffect, useState } from 'react';
import TableDetails from './TableDetails';

const ImageTable = () => {
  const [allData, setAllData] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/allImage')
    .then(res=>res.json())
    .then(data=>setAllData(data))
  },[])
  return (
    <div>
      <div className="overflow-x-auto w-full container mx-auto">
  <table className="table w-full">
  
    <thead>
      <tr>
       
        <th>Images</th>
        <th>Name</th>
       
       
      </tr>
    </thead>
    <tbody>
     
     {
      allData.slice(0,5).map(data=><TableDetails key={data._id} data={data} ></TableDetails>)
     }
     
    
    </tbody>
   

    
  </table>
</div>
    </div>
  );
};

export default ImageTable;