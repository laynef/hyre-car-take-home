import React from 'react';
import ReactDOM from 'react-dom';
import Details from '../Details';


const attributes = {
    year: '',
    make: '',
    model: '',
    trim: '',
    style: '',
    type: '', 
    size: '',
    category: '', 
    made_in: '', 
    made_in_city: '',
    doors: '',
    fuel_type: '',
    fuel_capacity: '',
    city_mileage: '',
    highway_mileage: '',
    engine: '',
    engine_size: '',
    engine_cylinders: '',
    transmission: '',
    transmission_short: '',
    transmission_type: '',
    transmission_speeds: '',
    anti_brake_system: '',
    steering_type: '',
    curb_weight: '',
    overall_height: '',
    overall_length: '',
    overall_width: '',
    standard_seating: '',
    invoice_price: '',
    delivery_charges: '',
    manufacturer_suggested_retail_price: '',
    front_brake_type: '',
    rear_brake_type: '',
    front_suspension: '',
    rear_suspension: '',
    tires: '',
    curb_weight_manual: '',
    ground_clearance: '',
    track_front: '',
    track_rear: '',
    cargo_length: '',
    optional_seating: '',
    passenger_volume: '',
    cargo_volume: '',
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Details attributes={attributes} />, div);
  ReactDOM.unmountComponentAtNode(div);
});