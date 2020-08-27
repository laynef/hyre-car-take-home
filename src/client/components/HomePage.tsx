import * as React from 'react';
import { useHistory } from 'react-router-dom';


const HomePage: React.FC = () => {
  const [vin, setVin] = React.useState('');
  const history = useHistory();
  const onClick = () => history.push('/vin/' + vin);

  return (
    <div className="w-100 h-100 bg-light pt-5">
        <h1 className="text-center font-weight-light pt-3">Hello World</h1>
        <input onChange={e => setVin(e.target.value)} className="form-control" type="text" placeholder="Enter a vin number" />
        <input onSubmit={onClick} onClick={onClick} type="submit" value="Submit" className="btn btn-outline-primary" />
    </div>
  );
}

export default HomePage;