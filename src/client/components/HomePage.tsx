import * as React from 'react';
import { useHistory } from 'react-router-dom';


const HomePage: React.FC = () => {
  const [vin, setVin] = React.useState('');
  const [error, setError] = React.useState('');
  const history = useHistory();
  
  const onClick = () => {
    const validVinRegex = /^[A-HJ-NPR-Za-hj-npr-z\d]{8}[\dX][A-HJ-NPR-Za-hj-npr-z\d]{2}\d{6}$/;
    if (validVinRegex.test(vin)) {
      history.push('/vin/' + vin)
    } else {
      setError('Enter a valid vin number');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="w-100 h-100 bg-light pt-5">
        <h1 className="text-center font-weight-light pt-3">Vehicle Lookup</h1>
        <div className="card shadow pr-5 pl-5 m-5">
          <div className="d-flex flex-column p-3">
            <input onChange={e => setVin(e.target.value)} className="form-control mb-2" type="text" placeholder="Enter a vin number" />
            <input onSubmit={onClick} onClick={onClick} type="submit" value="Submit" className="btn btn-outline-primary" />
            {error && <div className="text-left text-danger">{error}</div>}
          </div>
        </div>
    </div>
  );
}

export default HomePage;