import * as React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const uri = '/api/v1/graphql';
const client = new ApolloClient({ uri });

const HomePage: React.FC = () => {
  return (
    <div className="w-100 h-100 bg-light pt-5">
        <h1 className="text-center font-weight-light">Hello World</h1>
    </div>
  );
}

export default HomePage;