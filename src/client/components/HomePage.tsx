import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';


interface QueryChildren {
  loading: boolean;
  error?: any;
  data: any;
}

const MAKES_QUERY = gql`
  query Makes {
    makes {
      Count
      Results {
        Make_ID
        Make_Name
      }
    }
  }
`;

const HomePage: React.FC = () => {
  return (
    <div className="w-100 h-100 bg-light pt-5">
        <h1 className="text-center font-weight-light pt-3">Hello World</h1>
        <Query query={MAKES_QUERY}>
          { 
            ({ loading, data }: QueryChildren) => {
              if (loading) return <p>Loading...</p>;
              
              return <p>{JSON.stringify(data)}</p>
            }
          }
        </Query>
    </div>
  );
}

export default HomePage;