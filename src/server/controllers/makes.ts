import axios from 'axios';
import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql';


// Launch Type
const MakeResultsType = new GraphQLObjectType({
    name: 'MakesResults',
    fields: () => ({
        Make_ID: { type: GraphQLInt },
        Make_Name: { type: GraphQLString },
    })
});
  
  // Rocket Type
const MakeType = new GraphQLObjectType({
    name: 'Makes',
    fields: () => ({
        Count: { type: GraphQLInt },
        Results: { type: new GraphQLList(MakeResultsType) },
    })
});

// Query
export default {
    type: new GraphQLList(MakeType),
    resolve(parent: any, args: any) {
        return axios
            .get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json')
            .then(res => res.data)
            .catch(err => err);
    }
}