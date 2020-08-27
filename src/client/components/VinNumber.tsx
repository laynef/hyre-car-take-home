import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';


interface QueryChildren {
    loading: boolean;
    error?: any;
    data: any;
}

const VinNumber: React.FC = () => {
  return (
    <div className="w-100 h-100 bg-light">
        <h1 className="text-center font-weight-light">Vin Number</h1>
    </div>
  );
}

export default VinNumber;