import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GetAllCustomers from './components/GetAllCustomers';
import CreateCustomer from './components/CreateCustomer';

const App = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {getAllCustomers()}, [])
  const getAllCustomers = () => {
    axios.get("http://localhost:3000/api/creditTracker/").then((response) => {
      setCustomers(response.data)
    }).catch(error => console.log(error));
    }
  return (
    <div>
      <GetAllCustomers data={customers} />
      <CreateCustomer />
    </div>
  )
}

export default App;
