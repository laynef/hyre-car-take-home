import * as React from 'react';
import Tile from './Tile';
import { map, startCase } from 'lodash';


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
    anti_brake_system: string;
    steering_type: string;
    curb_weight: string;
    overall_height: string;
    overall_length: string;
    overall_width: string;
    standard_seating: string;
    invoice_price: string;
    delivery_charges: string;
    manufacturer_suggested_retail_price: string;
    front_brake_type: string;
    rear_brake_type: string;
    front_suspension: string;
    rear_suspension: string;
    tires: string;
    curb_weight_manual: string;
    ground_clearance: string;
    track_front: string;
    track_rear: string;
    cargo_length: string;
    optional_seating: string;
    passenger_volume: string;
    cargo_volume: string;
}

interface Props {
    attributes: Attributes;
}

const Details: React.FC<Props> = (props) => {
  const items = map(props.attributes, (value, name) => ({ 
    value: !!value ? startCase(value) : 'N/A', 
    name: startCase(name),
  }));

  return (
    <div className="w-100 bg-light d-flex flex-wrap mt-3 mw-100">
        {items.map((item, index) => (
            <Tile key={index}>
                <p className="card shadow-sm bg-white p-2">{item.name}: {item.value}</p>
            </Tile>
        ))}
    </div>
  );
}

export default Details;
