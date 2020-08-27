import * as React from 'react';


const NotFound: React.FC = () => {
  return (
    <div className="w-100 h-100 bg-light d-flex flex-column align-items-center pt-5">
        <h1 className="text-center font-weight-light mt-3">404</h1>
        <h2 className="text-center font-weight-light">Not Found</h2>
        <a href="/" className="btn btn-outline-primary text-center">Back to Homepage</a>
    </div>
  );
}

export default NotFound;