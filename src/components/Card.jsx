import { Button, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Card = ({img , amount , checkoutHandler}) => {
  
  return (
    <VStack>
        <Image src={img} height={"270px"} width={"400px"} objectFit={"cover"}/>
        <Text>{amount}</Text>
        <Button onClick={()=>{checkoutHandler(amount)}}>Buy Now</Button>
    </VStack>
  )
}

export default Card;