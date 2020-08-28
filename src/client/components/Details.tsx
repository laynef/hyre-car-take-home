import * as React from 'react';


interface Attributes {
    year: string;
    make: string;
    model: string;
    trim: string;
    style: string;
    type: string; 
    size: string;
    category: string; 
    made_in: string; 
    made_in_city: string;
    doors: string;
    fuel_type: string;
    fuel_capacity: string;
    city_mileage: string;
    highway_mileage: string;
    engine: string;
    engine_size: string;
    engine_cylinders: string;
    transmission: string;
    transmission_short: string;
    transmission_type: string;
    transmission_speeds: string;
    drivetrain: string;
    anti_brake_system: string;
    steering_type: string;
    curb_weight: string;
    gross_vehicle_weight_rating: string;
    overall_height: string;
    overall_length: string;
    overall_width: string;
    wheelbase_length: string;
    standard_seating: string;
    invoice_price: string;
    delivery_charges: string;
    manufacturer_suggested_retail_price: string;
    production_seq_number: string;
    front_brake_type: string;
    rear_brake_type: string;
    turning_diameter: string;
    front_suspension: string;
    rear_suspension: string;
    front_spring_type: string;
    rear_spring_type: string;
    tires: string;
    front_headroom: string;
    rear_headroom: string;
    front_legroom: string;
    rear_legroom: string;
    front_shoulder_room: string;
    rear_shoulder_room: string;
    front_hip_room: string;
    rear_hip_room: string;
    curb_weight_manual: string;
    ground_clearance: string;
    track_front: string;
    track_rear: string;
    cargo_length: string;
    width_at_wheelwell: string;
    width_at_wall: string;
    depth: string;
    optional_seating: string;
    passenger_volume: string;
    cargo_volume: string;
    standard_towing: string;
    maximum_towing: string;
    standard_payload: string;
    maximum_payload: string;
    maximum_gvwr: string;
}

interface Props {
    attributes: Attributes;
}

const Details: React.FC<Props> = ({ attributes: {
    
} }) => {
  return (
    <div className="w-100">

    </div>
  );
}

export default Details;
