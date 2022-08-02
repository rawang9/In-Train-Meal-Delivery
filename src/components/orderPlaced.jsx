import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';


function Orderplaced() {
  // const [setShow] = useState(true);
  //console.log("asdb");
  return (
    <Alert variant="success">
      <Alert.Heading>Yay, Your Order has been placed!</Alert.Heading>
      <p>
        Your order has been Successfully received by us. Our delivery team will reach out to you shortly.
      </p>
      <hr />
    </Alert>
  );
}

export default Orderplaced;
