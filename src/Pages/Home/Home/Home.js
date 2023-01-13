import React from 'react';
import AllImages from '../AllImages/AllImages';
import ImageTable from '../ImageTable/ImageTable';

const Home = () => {
  return (
    <div>
      <h1>This is home</h1>
      <ImageTable></ImageTable>
      <AllImages></AllImages>
    </div>
  );
};

export default Home;