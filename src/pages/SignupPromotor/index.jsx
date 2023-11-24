import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/blue-logo.png";
import LogoWhite from "../../assets/white-logo.png";
import { Button } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import * as yup from "yup";
import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import axios from "axios";

const SignupPromotor = () => {

  const [username ,setUsername] = useState("")
  const [email ,setEmail] = useState("")
  const [password ,setPassword] = useState("")
  const [passwordConfirmation , setPasswordConfirmation] = useState("")
  const [errorMessage , setErrorMessage] = useState("")
  

  const navigate = useNavigate();

  const registerPromotor = async () => {
    try {
      const userData = {
                 username,
                 email,
                 password,
                 confirmPassword: passwordConfirmation,
                 role: "promotor"
               };
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/accounts/register`, userData);
  
      const { success, message } = response.data;
  
      if (success) {
        // Registrasi berhasil, lakukan sesuatu seperti redirect atau menampilkan pesan sukses
        navigate('/')
      } else {
        // Registrasi gagal, tampilkan pesan error dari backend
        setErrorMessage(message);
        navigate('/signin')
      }
    } catch (error) {
      navigate('/signup')
       alert("Harap masukkan data dengan benar", error);
      if (error.response && error.response.data && error.response.data.message) {
        console.log("Server error message:", error.response.data.message)
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage(error);
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    onSubmit: registerPromotor,

    validationSchema: yup.object().shape({
      username: yup.string().min(3 , "username Minimal 3 karakter").max(10 , "username tidak boleh lebih dari 10 karakter"),
      email: yup.string().email("masukkan email dengan benar"),
      password: yup
        .string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*[\]{}()?"\\,><':;|_~`=+-])[a-zA-Z\d!@#$%^&*[\]{}()?"\\,><':;|_~`=+-]{8,99}$/,
          "minimal 8 karakter A-Z !@#$% 1-10"
        ),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Password harus sama"),
    }),
  });

  const handleForm = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
    console.log(target.name , target.value)
  };


  return (
    <div id="signup-page-s">
      <div id="logo-div-s">
        <img id="logoEv-s" src={Logo} alt="LogoEventclick" onClick={() => navigate("/")}/>
        <img id="logoEg-s" src={LogoWhite} alt="LogoEventclick" onClick={() => navigate("/")}/>
      </div>

      <div id="container-b-s">
        <div id="image-section-b-s">
          <img
            id="logo-vector-s"
            src="https://img.freepik.com/free-vector/team-office-workers-planning-business-giant-calendar_74855-19912.jpg?size=626&ext=jpg&ga=GA1.1.1709398385.1682491417&semt=ais"
            alt=""
          />
        </div>
        <div id="form-section-s">
          <div id="place-b-s">
            <h1>Sign Up </h1>
            <form className="input" onSubmit={formik.handleSubmit}>
                  
              <FormControl  isInvalid={formik.errors.username}  >
                <input
                onInput={ (e) => setUsername(e.target.value)}
                  onChange={handleForm}
                  type="text"
                  placeholder="Username"
                  name="username"

                />
                <FormErrorMessage fontSize={"12px"} ml={"5px"}>
                  {formik.errors.username}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.email}>
                <input
                  onInput={(e) => setEmail(e.target.value)}
                  onChange={handleForm}
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <FormErrorMessage fontSize={"12px"} ml={"5px"}>
                  {formik.errors.email}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.password}>
              <input
                onInput={(e) => setPassword(e.target.value)}
                onChange={handleForm}
                type="password"
                placeholder="Password"
                name="password"
              />
              <FormErrorMessage fontSize={"12px"} ml={"5px"}>
                  {formik.errors.password}
                </FormErrorMessage>
              </FormControl>
             
              <FormControl isInvalid={formik.errors.confirmPassword}>
              <input
                onInput={(e) => setPasswordConfirmation(e.target.value) }
                onChange={handleForm}
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
              />
               <FormErrorMessage fontSize={"12px"} ml={"5px"}>
                  {formik.errors.confirmPassword}
                </FormErrorMessage>
              </FormControl>
              <button className="btn-form" type="Submit">
                Register as a Promotor 
              </button>
            </form>
            <p className="makesure-s">
              Already have an account?
              <span
                onClick={() => navigate("/signin")}
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "blue",
                  fontWeight: "bold",
                }}
              >
                Sign In
              </span>
            </p>
          </div>
          <div className="induk-btn-s">
            <Button
              className="btn-fb-s"
              w={"50%"}
              display={"flex"}
              gap={"5px"}
              colorScheme="blue"
            >
              {" "}
              <FaFacebook fontSize={"24px"} /> Facebook
            </Button>
            <Button
              className="btn-g-s"
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

export default SignupPromotor;