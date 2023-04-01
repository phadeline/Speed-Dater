import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";

import { useMutation } from "@apollo/client";
import { ADD_BIO } from "../../utils/mutations";
// import Auth from "../../utils/auth";

const InitBioForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    interests: "",
    bio: "",
    age: "",
    gender: "",
    location: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addBio, { error }] = useMutation(ADD_BIO);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addBio({
        variables: {
          interests: userFormData.interests,
          bio: userFormData.bio,
          age: parseInt(userFormData.age),
          gender: userFormData.gender,
          location: userFormData.location,
        },
      });
      console.log(data);
      //   Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      interests: "",
      bio: "",
      age: "",
      gender: "",
      location: "",
      pictures: "",
    });
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor="interests">interests</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your interests"
            name="interests"
            onChange={handleInputChange}
            value={userFormData.interests}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="bio">bio</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your bio here"
            name="bio"
            onChange={handleInputChange}
            value={userFormData.bio}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="age">age</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your age"
            name="age"
            onChange={handleInputChange}
            value={userFormData.age}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="gender">gender</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your gender"
            name="gender"
            onChange={handleInputChange}
            value={userFormData.gender}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="location">location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your city"
            name="location"
            onChange={handleInputChange}
            value={userFormData.location}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        {/* <Form.Group>
          <Form.Label htmlFor="pictures">Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your password"
            name="pictures"
            onChange={handleInputChange}
            value={userFormData.pictures}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group> */}

        <Button
          disabled={
            !(
              userFormData.interests &&
              userFormData.bio &&
              userFormData.age &&
              userFormData.gender &&
              userFormData.location
            )
          }
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default InitBioForm;
