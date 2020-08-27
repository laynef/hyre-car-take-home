import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';


const uri = '/api/v1/graphql';
const client = new ApolloClient({ uri });

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="w-100 h-100 bg-light">

      </div>
    </ApolloProvider>
  );
}

export default App;
