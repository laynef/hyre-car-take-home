import React from 'react';
import ReactDOM from 'react-dom';
import VinLookup from '../VinLookup';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';


const uri = '/api/v1/graphql';
const client = new ApolloClient({ uri });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <VinLookup />
        </Router>
    </ApolloProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});