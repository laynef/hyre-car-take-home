import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import images from './images';
import marketValue from './marketValue';
import vinSpec from './vinSpec';


// Root Query
const query = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        images,
        marketValue,
        vinSpec,
    }
});

// schema
const schema = new GraphQLSchema({ query });

export default schema;