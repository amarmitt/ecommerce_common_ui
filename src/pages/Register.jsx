import styled from "styled-components";
import React, { useState } from "react";
//import { mobile } from "../responsive";
import bg_2 from "../Assets/images/bg_2.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  //const [value, setValue] = {};
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAdress] = useState("");
  const [cityName, setCityName] = useState("");
  const [stateName, setStateName] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");
  const history = useNavigate();
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "phone") {
      setPhone(value);
    }
    if (id === "address") {
      setAdress(value);
    }
    if (id === "cityName") {
      setCityName(value);
    }
    if (id === "stateName") {
      setStateName(value);
    }
    if (id === "pincode") {
      setPincode(value);
    }
    if (id === "country") {
      setCountry(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "FirstName: " +
        firstName +
        " " +
        "lastName: " +
        lastName +
        " " +
        "email: " +
        email +
        " " +
        "password: " +
        password +
        " " +
        "phone: " +
        phone +
        " " +
        "address: " +
        address +
        " " +
        "cityName: " +
        cityName +
        " " +
        "stateName: " +
        stateName +
        " " +
        "pincode: " +
        pincode +
        " " +
        "country: " +
        country
    );

    const data = {
      addressList: [
        {
          address: address,
          city: cityName,
          country: country,
          pinCode: pincode,
          state: stateName,
        },
      ],
      emailId: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      phone: phone,
      role: [
        {
          roleName: "User",
        },
      ],
    };
    const url = "http://localhost:8080/api/user/createUser";

    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data);
        history("/", { replace: true });
      })
      .catch(({ response }) => {
        console.log(response);
      });
  };

  return (
    <Container style={{ backgroundImage: `url(${bg_2})` }}>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            id="firstName"
            name="firstName"
            value={firstName}
            placeholder="first name"
            required
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            id="lastName"
            name="lastName"
            value={lastName}
            placeholder="last name"
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            id="email"
            name="email"
            type="email"
            value={email}
            placeholder="email"
            required
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            id="password"
            name="password"
            value={password}
            placeholder="password"
            required
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            required
            placeholder="phone number"
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            id="address"
            name="address"
            autoComplete="off"
            value={address}
            placeholder="street address"
            required
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            id="cityName"
            name="cityName"
            autoComplete="off"
            value={cityName}
            placeholder="city"
            required
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            id="stateName"
            name="stateName"
            autoComplete="off"
            value={stateName}
            placeholder="state"
            required
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            id="pincode"
            name="pincode"
            autoComplete="off"
            value={pincode}
            type="number"
            placeholder="pincode"
            required
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            id="country"
            name="country"
            autoComplete="off"
            value={country}
            placeholder="country"
            required
            onChange={(e) => handleInputChange(e)}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={(e) => handleSubmit(e)}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
