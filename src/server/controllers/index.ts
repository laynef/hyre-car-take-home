import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import makes from './makes';
import make from './make';


// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        makes,
        make,
    }
});

// schema
const schema = new GraphQLSchema({
    query: RootQuery,
});

export default schema;