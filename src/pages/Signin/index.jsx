import React, { useState } from "react";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/blue-logo.png";
import LogoWhite from "../../assets/white-logo.png";
import { Button, InputRightAddon, Input, InputGroup } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import * as yup from "yup";
import { FormControl, FormErrorMessage, Text } from "@chakra-ui/react";
import axios from "axios";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Box } from "@chakra-ui/react";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = React.useState(false);

  const loginUser = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/accounts/login`,
        {
          email,
          password,
        }
      );
      setEmail("");
      setPassword("");
      localStorage.setItem("TOKEN", response.data.result.token);
      if (response.data.result.role === "user") {
        navigate("/");
      } else {
        // SEMENTARA
        navigate("/profile-user/my-ticket");
      }
    } catch (error) {
      console.log(error);
      alert("Wrong password / email")
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: loginUser,

    validationSchema: yup.object().shape({
      email: yup.string().email("masukkan email dengan benar"),
      password: yup
        .string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*[\]{}()?"\\,><':;|_~`=+-])[a-zA-Z\d!@#$%^&*[\]{}()?"\\,><':;|_~`=+-]{8,99}$/,
          "minimal 8 karakter A-Z !@#$% 1-10"
        ),
    }),
  });

  const handleForm = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };


  return (
    <div id="signin-page">
         
      <div id="logo-div" onClick={() => navigate("/")}>
        <img
          id="logoEv"
          src={Logo}
          alt="LogoEventclick"
        />
        <img
     
          id="logoEg"
          src={LogoWhite}
          alt="LogoEventclick"
        />
      </div>

      <div id="container-b">
        <div id="image-section-b">
          <img
            id="logo-vector"
            src="https://img.freepik.com/free-vector/team-office-workers-planning-business-giant-calendar_74855-19912.jpg?size=626&ext=jpg&ga=GA1.1.1709398385.1682491417&semt=ais"
            alt=""
          />
        </div>
        <div id="form-section">
          <div id="place-b">
            <h1>Sign In</h1>
            <form onSubmit={formik.handleSubmit}>
              <FormControl isInvalid={formik.errors.email}>
                <input
                  className="input-BTN"
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
                  onChange={handleForm}
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <FormErrorMessage ml={"5px"} fontSize={"13px"}>
                  {formik.errors.email}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.password}>
                <InputGroup display={"flex"} alignItems={"center"}  >
                  <input
                    className="input-BTN"
                    value={password}
                    onInput={(e) => setPassword(e.target.value)}
                    onChange={handleForm}
                    type={isVisible ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                  />
                  <InputRightAddon
                  bgColor={"#E8F0FE"}
                    h={"50px"}
                    borderRadius={"10px"}
                    onClick={() => setIsVisible(!isVisible)}
                    cursor={"pointer"}
                  >
                    {isVisible ? < IoMdEye /> : <IoMdEyeOff />}
                  </InputRightAddon>
                </InputGroup>
                  <FormErrorMessage ml={"5px"} fontSize={"13px"}>
                    {formik.errors.password}
                  </FormErrorMessage>
              </FormControl>
              <Text
                ml={"5px"}
                fontSize={"12px"}
                color={"blue "}
                cursor={"pointer"}
                mt={"15px"}
              >
                Forgot Password ?
              </Text>
              <button
                onClick={() => loginUser()}
                className="btn-form"
                type="submit"
              >
                Sign In
              </button>
            </form>
            <p className="makesure">
              Don't have an account yet?{" "}
              <span
                onClick={() => navigate("/choose-role")}
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "blue",
                  fontWeight: "bold",
                }}
              >
                Sign up
              </span>
            </p>
          </div>
          <div className="induk-btn">
            <Button
              className="btn-fb"
              w={"50%"}
              display={"flex"}
              gap={"5px"}
              colorScheme="blue"
            >
              {" "}
              <FaFacebook fontSize={"24px"} /> Facebook
            </Button>
            <Button
              className="btn-g"
              w={"50%"}
              display={"flex"}
              gap={"5px"}
              colorScheme="teal"
              variant={"outline"}
            >
              {" "}
              <FcGoogle fontSize={"23px"} /> Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
