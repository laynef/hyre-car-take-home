import * as React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const uri = '/api/v1/graphql';
const client = new ApolloClient({ uri });

const HomePage: React.FC = () => {
  return (
    <div className="w-100 h-100 bg-light">

    </div>
  );
}

export default HomePage;