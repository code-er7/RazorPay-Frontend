import React from 'react';
import {useSearchParams} from "react-router-dom";
const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const reference = searchQuery.get("reference");
  return <div>{reference}</div>;
}
export default PaymentSuccess