import * as React from 'react';
import { useHistory } from 'react-router-dom';


const HomePage: React.FC = () => {
  const [vin, setVin] = React.useState('');
  const history = useHistory();
  const onClick = () => history.push('/vin/' + vin);

  return (
    <div className="w-100 h-100 bg-light pt-5">
        <h1 className="text-center font-weight-light pt-3">Vehicle Lookup</h1>
        <div className="card shadow pr-5 pl-5 m-5">
          <div className="d-flex flex-column p-3">
            <input onChange={e => setVin(e.target.value)} className="form-control mb-2" type="text" placeholder="Enter a vin number" />
            <input onSubmit={onClick} onClick={onClick} type="submit" value="Submit" className="btn btn-outline-primary" />
          </div>
        </div>
    </div>
  );
}

export default HomePage;