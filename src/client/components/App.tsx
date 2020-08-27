import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NotFound from './NotFound';


const uri = '/api/v1/graphql';
const client = new ApolloClient({ uri });

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="w-100 h-100 bg-light">
          <Route path="/" component={HomePage} />
          <Route path="*" component={NotFound} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
