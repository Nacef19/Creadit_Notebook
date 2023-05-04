import axios from 'axios';
import React, { useState } from 'react'

const CreateCustomer = () => {
    const [customerName, setCustomerName] = useState("");
    const [credit, setCredit] = useState(0);
  
    const createCustomer = () => {
        const customers = {
            customerName: customerName,
            credit: credit,
        }
        axios.post("http://localhost:3000/api/creditTracker/add/", customers).then(response => console.log(response.data)).catch(err => console.log(err))
        window.location.reload();
    }
  return (
    <div>
      <input onChange={(e) => setCustomerName(e.target.value)}/>
      <input onChange={(e) => setCredit(e.target.value)}/>
      <button onClick={createCustomer}>Add customer</button>
      
    </div>
  )
}

export default CreateCustomer;
