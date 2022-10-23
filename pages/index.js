import Head from 'next/head'
import { Flex, Text} from '@chakra-ui/react'

export default function Home() {
  return (
    <div className="main">
    <Head>
      <title> Primes </title>
      <link rel="shortcut icon" href=""/>

    </Head>
    <Flex className="main" justifyContent={"center"} justifyItems={"center"}>
    <Flex marginTop={"68px"} flexDirection={'column'}>
    <Text textAlign={"center"} fontWeight={"500"} fontStyle={"italic"} fontSize={{base:"16px",md:"18px"}} background={"#FFFFCCB0"} width={{base:"301px",md:"401px"}} color={"#68693F"}>
      writings on the mysterious beauty of primes
    </Text>

    <Flex marginTop={"38px"}  width={{base:"301px",md:"401px"}} flexDirection={"column"} gap={"40px"}>
    
    <Flex flexDirection={"column"}>
      <Text fontSize={{base:"16px",md:"18px"}} fontWeight={"500"} _hover= {{base:"", md :{textDecoration: "underline"}}}>
        <a href=''>
        Willan's Formula
        </a>
        </Text>
      <Text fontSize={{base:"12px",md:"14px"}} fontWeight={"400"} paddingTop={"7px"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
    </Flex>



    </Flex>

    </Flex>

    </Flex>
    </div>
  )
}
