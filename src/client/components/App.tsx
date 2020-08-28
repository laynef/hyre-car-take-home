import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import NotFound from './NotFound';
import VinLookup from './VinLookup';

import '../styles/index.scss';


const uri = '/api/v1/graphql';
const client = new ApolloClient({ uri });

const App: React.FC = () => {
  return (
      <ApolloProvider client={client}>
          <div className="w-100 h-100 bg-light">
            <div className="bg-primary w-100 card shadow d-flex flex-row align-items-center" style={{ position: 'fixed', height: '50px' }}>
              <a className="ml-3 text-white" href="/">Vehicle Lookup</a>
            </div>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/vin/:vin">
                <VinLookup />
              </Route>
              <Route exact path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
      </ApolloProvider>
  );
}

export default App;
