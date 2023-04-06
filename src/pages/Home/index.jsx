import React, { useState } from 'react';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header';
import { blogList } from '../../config/data';

const Home = () => {
  const [blogs] = useState(blogList);

 

  return (
    <div>
      {/* Page Header */}
      <Header heading="Events"  paragraph="An Impact for People, Planet and Prosperity"/>

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
