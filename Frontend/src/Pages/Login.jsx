import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Container,
  useToast,
} from "@chakra-ui/react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { loginAPI } from "../Redux/Auth/auth.action";
import { USER_LOGIN_SUCCESS } from "../Redux/Auth/auth.actionTypes";

export default function SimpleCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = () => {
    const creds = {
      email: email,
      password: password,
    };
    console.log(creds);

    dispatch(loginAPI(creds)).then((res) => {
      if (res === USER_LOGIN_SUCCESS) {
        toast({
          title: "Login Successfull",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        navigate("/client");
      } else {
        toast({
          title: "Login Failed, Credentials are Invalid",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justifyContent={"space-evenly"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Container
        className="containLog"
        marginTop="0"
        maxW="sm"
        bg="white"
        centerContent
      >
        <Heading size="md">The Changelog</Heading>

        <Box
          fontSize="smaller"
          marginTop="5"
          padding="4"
          bg="#00B289"
          color="white"
          maxW="sm"
        >
          In your invoice settings, you can now pick “Simplified payment page”.
          Instead of seeing the entire invoice with a small payment section on
          the right, they’ll see all the payments option upfront with the
          ability to view the invoice on scroll.
        </Box>

        <Box
          fontSize="smaller"
          marginTop="5"
          padding="4"
          bg="#00B289"
          color="white"
          maxW="md"
        >
          You can now create client forms and surveys, no matter which plan you
          are on. The forms also have an updated, cleaner look.
        </Box>

        <Box
          fontSize="smaller"
          marginTop="5"
          padding="4"
          bg="#00B289"
          color="white"
          maxW="md"
        >
          Keep your accounting synced between Bonsai and QuickBooks with the new
          QuickBooks Online integration. Available on the Workflow Plus,
          Professional, and Business plan, it automatically sends your paid
          invoices in Bonsai to QuickBooks Online. No more manually downloading
          and uploading your invoices!
        </Box>
      </Container>

      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading style={{ color: "#00B289" }} fontSize={"4xl"}>
            Sign in to your account
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"#00B289"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"#00B289"}>Forgot password?</Link>
              </Stack>
              <Button
                onClick={handleLogin}
                bg="#00B289"
                color={"white"}
                _hover={{
                  bg: "#00B289",
                }}
              >
                Log in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

