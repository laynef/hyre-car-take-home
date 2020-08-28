import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import images from './images';
import vinSpec from './vinSpec';


// Root Query
const query = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        images,
        vinSpec,
    }
});

// schema
const schema = new GraphQLSchema({ query });

export default schema;