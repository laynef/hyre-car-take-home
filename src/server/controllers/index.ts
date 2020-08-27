import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import makes from './makes';
import make from './make';
import images from './images';


// Root Query
const query = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        images,
        makes,
        make,
    }
});

// schema
const schema = new GraphQLSchema({ query });

export default schema;