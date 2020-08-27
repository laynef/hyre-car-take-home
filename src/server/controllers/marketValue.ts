import axios from 'axios';
import { parseQueryStrings } from './utils';
import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLBoolean,
} from 'graphql';


  // Market Value Type
const MarketValueType = new GraphQLObjectType({
    name: 'MarketValue',
    fields: () => ({
        vin: { type: GraphQLString },
        averageTradeIn: { type: GraphQLInt },
        loanValue: { type: GraphQLInt },
        msrp: { type: GraphQLInt },
        retail: { type: GraphQLInt },
        success: { type: GraphQLBoolean },
    })
});


// Query
export default {
    args: { vin: { type: GraphQLString } },
    type: MarketValueType,
    resolve(parent: any, args: any) {
        return axios
            .get('http://api.carsxe.com/marketvalue?' + parseQueryStrings({ vin: args.vin }))
            .then(res => res.data)
            .catch(err => err);
    }
}