import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import images from './images';
import vin from './vin';


// Root Query
const query = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        images,
        vin,
    }
});

// schema
const schema = new GraphQLSchema({ query });

export default schema;