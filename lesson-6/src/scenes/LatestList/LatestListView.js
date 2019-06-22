import React from 'react';
import T from 'prop-types';
import './LatestListView.scss';

function LatestListView({ list, isLoading }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}

LatestListView.propTypes = {};

export default LatestListView;
