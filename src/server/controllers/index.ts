import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import images from './images';
import marketValue from './marketValue';
import vin from './vin';


// Root Query
const query = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        images,
        marketValue,
        vin,
    }
});

// schema
const schema = new GraphQLSchema({ query });

export default schema;