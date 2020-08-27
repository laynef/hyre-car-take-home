import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';


interface QueryChildren {
  loading: boolean;
  error?: any;
  data: any;
}

interface Results {
  Make_ID: string;
  Make_Name: string;
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
              if (data && data.makes && data.makes.Results) {
                return data.makes.Results.map((e: Results, i: number) => (<p key={i}>{e.Make_Name}</p>))
              }
            }
          }
        </Query>
    </div>
  );
}

export default HomePage;