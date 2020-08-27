import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NotFound from './NotFound';


const uri = '/api/v1/graphql';
const client = new ApolloClient({ uri });

const App: React.FC = () => {
  return (
      <ApolloProvider client={client}>
        <div className="w-100 h-100 bg-light">
          <Switch>
            <div className="bg-primary w-100" style={{ position: 'fixed', height: '50px' }}>
              <a href="/">Home</a>
            </div>
            <Route path="/" component={HomePage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </ApolloProvider>
  );
}

export default App;
