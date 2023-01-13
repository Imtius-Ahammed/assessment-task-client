import React from 'react';
import AllImages from '../AllImages/AllImages';
import ImageTable from '../ImageTable/ImageTable';

const Home = () => {
  return (
    <div className='container mx-auto '>
      <h1 className='text-center text-3xl py-8 font-medium'>This the Table Section for Important Images</h1>
     
      <ImageTable></ImageTable>
      
      <AllImages></AllImages>
    </div>
  );
};

export default Home;