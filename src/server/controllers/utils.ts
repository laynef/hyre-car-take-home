import * as dotenv from 'dotenv';
dotenv.config();

export const parseQueryStrings = (object: any = {}): string => {
    let results = '';
    object.format = 'json';
    object.key = process.env.API_KEY;

    for (let key in object) {
        results += '&' + key + '=' + object[key];
    }

    return results.slice(1);
}