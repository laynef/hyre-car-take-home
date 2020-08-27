import axios from 'axios';
import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
} from 'graphql';


// Launch Type
const MakeResultsType = new GraphQLObjectType({
    name: 'MakeResults',
    fields: () => ({
        Make_ID: { type: GraphQLInt },
        Model_ID: { type: GraphQLInt },
        Make_Name: { type: GraphQLString },
        Model_Name: { type: GraphQLString },
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

// Query
export default {
    args: {
        Make_ID: { type: GraphQLInt }
    },
    type: MakeType,
    resolve(parent: any, args: any) {
        return axios
            .get('https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/' + args.Make_ID + '?format=json')
            .then(res => res.data)
            .catch(err => err);
    }
}
