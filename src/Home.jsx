import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./components/Card";
import axios from 'axios';

const Home = () => {
  const checkoutHandler = async(amount) => {
    const {data:{key}} = await axios.get("http://localhost:4000/api/getkey");
     const {data:{order}} = await axios.post("http://localhost:4000/api/checkout" , {
        amount ,
     })
     const options = {
       key, // Enter the Key ID generated from the Dashboard
       amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
       currency: "INR",
       name: "Bit Hive",
       description: "Testing Beta",
       image:
         "https://lh3.googleusercontent.com/-dGCNRSD1Cbo/AAAAAAAAAAI/AAAAAAAAAAA/AJIwbgZ_w5U7lCWY_mvVx_XSMpykX7E7uA/photo.jpg?sz=46",
       order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
       callback_url: "http://localhost:4000/api/paymentverification",
       prefill: {
         name: "Gaurav Kumar",
         email: "gaurav.kumar@example.com",
         contact: "9000090000",
       },
       notes: {
         address: "Razorpay Corporate Office",
       },
       theme: {
         color: "#3399cc",
       },
     };
     var razor = new window.Razorpay(options);
     razor.open();
  };
  return (
    <div>
      <Stack direction={["column", "row"]}>
        <Card
          amount={5000}
          img={
            "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg"
          }
          checkoutHandler={checkoutHandler}
        />
        <Card
          amount={3000}
          img={
            "https://www.apple.com/newsroom/images/product/ipad/standard/apple_ipados14_widgets_062220_big.jpg.large_2x.jpg"
          }
          checkoutHandler={checkoutHandler}
        />
        <Card
          amount={2000}
          img={
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-ultra-202209_GEO_IN?wid=340&hei=264&fmt=png-alpha&.v=1678733185893"
          }
          checkoutHandler={checkoutHandler}
        />
      </Stack>
    </div>
  );
};

export default Home;
