import React from 'react';

const TableDetails = ({data}) => {
  
  console.log(data)
  return (
    <tr>
        
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-24 h-26">
                <img src={data.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          
          </div>
        </td>
        <td>
          {data.name}
          <br/>
          <span className="badge badge-ghost badge-sm">{data.stock}</span>
        </td>
        
       
      </tr>
  );
};

export default TableDetails;