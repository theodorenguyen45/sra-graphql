import React from 'react';

import './style.scss';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className='overlay'>
      <div className='container' />
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
