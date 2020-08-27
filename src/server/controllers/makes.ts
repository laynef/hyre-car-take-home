import axios from 'axios';
import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} from 'graphql';


// Launch Type
const MakeResultsType = new GraphQLObjectType({
    name: 'MakeResults',
    fields: () => ({
        Make_ID: { type: GraphQLInt },
        Make_Name: { type: GraphQLString },
    })
});
  
  // Rocket Type
const MakeType = new GraphQLObjectType({
    name: 'Make',
    fields: () => ({
        Count: { type: GraphQLInt },
        Results: { type: new GraphQLList(MakeResultsType) },
    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        launches: {
            type: new GraphQLList(MakeType),
            resolve(parent, args) {
                return axios
                    .get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json')
                    .then(res => res.data)
                    .catch(err => err);
            }
        }
    },
});

  
const schema = new GraphQLSchema({
    query: RootQuery,
});

export default schema;
