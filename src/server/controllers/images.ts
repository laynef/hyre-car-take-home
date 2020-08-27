import dotenv from 'dotenv';
import axios from 'axios';
import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLBoolean,
} from 'graphql';
dotenv.config();


const parseQueryStrings = (object: any): string => {
    let results = '';
    for (let key in object) {
        results += '&' + key + '=' + object[key];
    }
    return results.slice(1);
}

// Launch Type
const ImageResultsType = new GraphQLObjectType({
    name: 'ImageResults',
    fields: () => ({
        mime: { type: GraphQLString },
        width: { type: GraphQLInt },
        height: { type: GraphQLInt },
        link: { type: GraphQLString },
        thumbnailLink: { type: GraphQLString },
    })
});

// Launch Type
const QueriedType = new GraphQLObjectType({
    name: 'QueriedType',
    fields: () => ({
        year: { type: GraphQLString },
        make: { type: GraphQLString },
        model: { type: GraphQLString },
        transparent: { type: GraphQLString },
        size: { type: GraphQLString },
        format: { type: GraphQLString },
    })
});

  // Rocket Type
const ImagesType = new GraphQLObjectType({
    name: 'Images',
    fields: () => ({
        images: { type: new GraphQLList(ImageResultsType) },
        query: { type: QueriedType },
        success: { type: GraphQLBoolean },
        error: { type: GraphQLString }
    })
});

const Args = {
    make: { type: GraphQLString },
    model: { type: GraphQLString },
    year: { type: GraphQLString },
    color: { type: GraphQLString },
};


// Query
export default {
    args: Args,
    type: ImagesType,
    resolve(parent: any, args: any) {
        const qs = parseQueryStrings({
            format: 'json',
            key: process.env.CARS_XE_API_KEY,
            ...args
        });

        return axios
            .get('http://api.carsxe.com/images?' + qs)
            .then(res => res.data)
            .catch(err => err);
    }
}