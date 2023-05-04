import axios from "axios";
import React, { useState } from "react";

const CustomersDetails = ({ customers }) => {
  const [view, setView] = useState(false);
  const [newAmount, setNewAmount] = useState("");
  const [customer, setCustomer] = useState(""); 
  const changeView = () => {
    setView(!view);
  };
  const deleteCustomer = (name) => {
    axios.delete(`http://localhost:3000/api/creditTracker/deleteOne/${name}`).then(res => console.log(res.data)).catch(err => console.log(err))
    window.location.reload();
  }
  const changeAmount = (name) => {
    axios.put(`http://localhost:3000/api/creditTracker/update/${name}`, {
        credit: newAmount,
        customerName: customer
    }).then(response => console.log(response, 'mehdi')).catch(error => console.log(error))
     window.location.reload();
  }
  return (
    <div>
       <div>
          <ul>
            <li>{customers.customerName}</li>
            <li>{view ?<input defaultValue={customers.credit} onChange={(e) => {
              console.log(newAmount)
                setNewAmount(e.target.value);
            }}/>:customers.credit}</li>
            <li>{customers.updatedDate}</li>
          </ul>
        </div>
      <button onClick={changeView}>Update Customer's Credit</button>
      <button onClick={() => {
        console.log('new');
        changeAmount(customers.customerName);
      }}>Add new credit</button> 
      <button onClick={() => deleteCustomer(customers.customerName)}>Delete Customer</button>
    </div>
  );
};

export default CustomersDetails;
