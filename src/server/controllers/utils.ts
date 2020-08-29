export const parseQueryStrings = (object: any = {}): string => {
    let results = '';
    object.format = 'json';
    object.key = '2iqktup9w_urqbnabtj_8wfiafq2r';

    for (let key in object) {
        results += '&' + key + '=' + object[key];
    }
    console.log(results.slice(1))
    return results.slice(1);
}