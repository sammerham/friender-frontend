import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form'

import userContext from "./userContext.js";


function ProfileForm({ handleUpdate }) {
  const { currentUser } = useContext(userContext);
  const { username, firstName, lastName, zipcode, radius, interests, hobbies } = currentUser;
  
  const initialFormData = {
    username,
    firstName,
    lastName,
    zipcode,
    radius,
    interests,
    hobbies,
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState(initialFormData)

  async function handleSubmit(evt) {
    evt.preventDefault();
    handleUpdate(selectedFile, formData); //api function  //backend
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  return (
    <Form onSubmit={handleSubmit} encType="multipart/form-data">

      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username"
          name="username"
          value={formData.username}
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
      <Form.Group className="mb-3" controlId="formZipcode">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="text" placeholder="Enter zip code"
          name="zipcode"
          value={formData.zipcode}
          onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formrRadius">
        <Form.Label>Radius</Form.Label>
        <Form.Control type="number" min="0" placeholder="Enter radius"
          name="radius"
          value={formData.radius}
          onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formHobbies">
        <Form.Label>Hobbies</Form.Label>
        <Form.Control type="textarea" placeholder="Enter your hobbies..."
          name="hobbies"
          value={formData.hobbies}
          onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formInterests">
        <Form.Label>Interests</Form.Label>
        <Form.Control type="textarea" placeholder="Enter your interests here..."
          name="interests"
          value={formData.interests}
          onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="form-image-file">
        <Form.Label>Image</Form.Label>
        <Form.File
          id="file"
          name="file"
          onChange={(e) => {
            // console.log(e.target.files);
            setSelectedFile(e.target.files[0]);
          }}
        />
      </Form.Group>
      <button> Submit! </button>
    </Form>
  )
}
export default ProfileForm;





