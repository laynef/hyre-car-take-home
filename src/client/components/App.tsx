import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NotFound from './NotFound';


const uri = '/api/v1/graphql';
const client: any = typeof window !== 'undefined' && new ApolloClient({ uri });

const Provider: React.FC = typeof window !== 'undefined' ? 
  ({ children }) => <ApolloProvider client={client}>{children}</ApolloProvider> :
  ({ children }) => <React.Fragment>{children}</React.Fragment>;

const App: React.FC = () => {
  return (
      <Provider>
        <div className="w-100 h-100 bg-light">
          <Switch>
            <div className="bg-primary w-100" style={{ position: 'fixed', height: '50px' }}>
              <a href="/">Home</a>
            </div>
            <Route path="/" component={HomePage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Provider>
  );
}

export default App;
