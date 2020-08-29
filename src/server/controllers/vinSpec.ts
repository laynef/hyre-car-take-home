import axios from 'axios';
import { parseQueryStrings } from './utils';
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
} from 'graphql';


// Vin Specs Attributes Type
const VinSpecsAttributesType = new GraphQLObjectType({
    name: 'VinSpecsAttributes',
    fields: () => ({
        year: { type: GraphQLString },
        make: { type: GraphQLString },
        model: { type: GraphQLString },
        trim: { type: GraphQLString },
        style: { type: GraphQLString },
        type: { type: GraphQLString }, 
        size: { type: GraphQLString },
        category: { type: GraphQLString }, 
        made_in: { type: GraphQLString }, 
        made_in_city: { type: GraphQLString },
        doors: { type: GraphQLString },
        fuel_type: { type: GraphQLString },
        fuel_capacity: { type: GraphQLString },
        city_mileage: { type: GraphQLString },
        highway_mileage: { type: GraphQLString },
        engine: { type: GraphQLString },
        engine_size: { type: GraphQLString },
        engine_cylinders: { type: GraphQLString },
        transmission: { type: GraphQLString },
        transmission_short: { type: GraphQLString },
        transmission_type: { type: GraphQLString },
        transmission_speeds: { type: GraphQLString },
        drivetrain: { type: GraphQLString },
        anti_brake_system: { type: GraphQLString },
        steering_type: { type: GraphQLString },
        curb_weight: { type: GraphQLString },
        gross_vehicle_weight_rating: { type: GraphQLString },
        overall_height: { type: GraphQLString },
        overall_length: { type: GraphQLString },
        overall_width: { type: GraphQLString },
        wheelbase_length: { type: GraphQLString },
        standard_seating: { type: GraphQLString },
        invoice_price: { type: GraphQLString },
        delivery_charges: { type: GraphQLString },
        manufacturer_suggested_retail_price: { type: GraphQLString },
        production_seq_number: { type: GraphQLString },
        front_brake_type: { type: GraphQLString },
        rear_brake_type: { type: GraphQLString },
        turning_diameter: { type: GraphQLString },
        front_suspension: { type: GraphQLString },
        rear_suspension: { type: GraphQLString },
        front_spring_type: { type: GraphQLString },
        rear_spring_type: { type: GraphQLString },
        tires: { type: GraphQLString },
        front_headroom: { type: GraphQLString },
        rear_headroom: { type: GraphQLString },
        front_legroom: { type: GraphQLString },
        rear_legroom: { type: GraphQLString },
        front_shoulder_room: { type: GraphQLString },
        rear_shoulder_room: { type: GraphQLString },
        front_hip_room: { type: GraphQLString },
        rear_hip_room: { type: GraphQLString },
        // interior_trim: new GraphQLList(GraphQLString),
        // exterior_color: new GraphQLList(GraphQLString),
        curb_weight_manual: { type: GraphQLString },
        ground_clearance: { type: GraphQLString },
        track_front: { type: GraphQLString },
        track_rear: { type: GraphQLString },
        cargo_length: { type: GraphQLString },
        width_at_wheelwell: { type: GraphQLString },
        width_at_wall: { type: GraphQLString },
        depth: { type: GraphQLString },
        optional_seating: { type: GraphQLString },
        passenger_volume: { type: GraphQLString },
        cargo_volume: { type: GraphQLString },
        standard_towing: { type: GraphQLString },
        maximum_towing: { type: GraphQLString },
        standard_payload: { type: GraphQLString },
        maximum_payload: { type: GraphQLString },
        maximum_gvwr: { type: GraphQLString },
    })
});

// Vin Spec Colors
const VinSpecsColorType = new GraphQLObjectType({
    name: 'VinSpecsColor',
    fields: () => ({
        category: { type: GraphQLString },
        name: { type: GraphQLString },
    })
})

// Vin Specs
const VinSpecsType = new GraphQLObjectType({
    name: 'VinSpecs',
    fields: () => ({
        attributes: { type: VinSpecsAttributesType },
        colors: { type: new GraphQLList(VinSpecsColorType) },
        error: { type: GraphQLString },
        success: { type: GraphQLBoolean },
    })
})

// Query
export default {
    args: {
        vin: { type: GraphQLString }
    },
    type: VinSpecsType,
    resolve(parent: any, args: any) {
        return axios
            .get('http://api.carsxe.com/specs?' + parseQueryStrings({ vin: args.vin }))
            .then(res => res.data)
            .catch(err => err);
    }
}
