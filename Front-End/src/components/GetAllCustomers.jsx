import CustomersDetails from './CustomersDetails';

const GetAllCustomers = (props) => {
  return (
    <div>
      {props.data.map((item, i) => (
        <div key={i}> 
           <CustomersDetails customers={item}/>
            </div>
      ))
      }
    </div>
  )
}

export default GetAllCustomers;
