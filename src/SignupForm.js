import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import DisplayError from './DisplayError';
/**
 * /signUp
 * 
 * props: handleSave fn
 * state: formData
 * */


function SignupForm({handleSignUp}){
    const initialFormData = {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        zipcode: "",
        radius:0
      }

  const [formData, setFormData] = useState(initialFormData);
  const history = useHistory();
  const [errorMessages, setErrorMessages] = useState([]);

  console.log("SignUpForm, formData, errorMessages", formData, errorMessages)

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }
  // handles the sign up to set the token. redirects to home on success
  async function handleSubmit(evt) {
    evt.preventDefault();
    const response = await handleSignUp(formData);
    if (response.success === true) {
      history.push("/");
    } else {
      setErrorMessages([response.errors]);
    }
  }

  return (

    <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
      <h2>Sign Up</h2>

      {errorMessages.length !== 0
        ? <DisplayError errors={errorMessages} />
        : <></>}
      <Form className="justify-content-center signupform" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username"
            name="username"
            value={formData.username}
            onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formzipcode">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control type="text" placeholder="Enter zip code"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formradius">
          <Form.Label>Radius</Form.Label>
          <Form.Control type="number" min= "0" placeholder="Enter radius"
            name="radius"
            value={formData.radius}
            onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>)
}

export default SignupForm;