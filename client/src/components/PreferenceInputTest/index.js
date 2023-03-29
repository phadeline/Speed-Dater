import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";

import { useMutation } from "@apollo/client";
import { ADD_PREFERENCE } from "../../utils/mutations";
// import Auth from "../../utils/auth";

const InitPreferenceForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    
    ageMin: "",
      ageMax: "",
      sexOrientation: "",
      gender: "",
      location: ""
     
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addPreference, { error }] = useMutation(ADD_PREFERENCE);

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

  const handlePreferenceForm = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addPreference({
          variables: {
            ageMin: parseInt(userFormData.ageMin),
            ageMax: parseInt(userFormData.ageMax),
            sexOrientation: userFormData.sexOrientation,
            gender: userFormData.gender,
            location: userFormData.location,
            
          }
        
      });
      console.log(data);
    //   Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
        ageMin: "",
        ageMax: "",
        sexOrientation: "",
        gender: "",
        location: "",
        
    });
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handlePreferenceForm}>
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
          <Form.Label htmlFor="ageMin">age min</Form.Label>
          <Form.Control
            type="text"
            placeholder="preferred min age"
            name="ageMin"
            onChange={handleInputChange}
            value={userFormData.ageMin}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="ageMax">Max age</Form.Label>
          <Form.Control
            type="text"
            placeholder="preferred maximum age"
            name="ageMax"
            onChange={handleInputChange}
            value={userFormData.ageMax}
            required
          />
          <Form.Control.Feedback type="invalid">
            max age is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="sexOrientation">sexual orientation</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your sexual orientation"
            name="sexOrientation"
            onChange={handleInputChange}
            value={userFormData.sexOrientation}
            required
          />
          <Form.Control.Feedback type="invalid">
            this is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="gender"> preferred gender</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your preferred gender"
            name="gender"
            onChange={handleInputChange}
            value={userFormData.gender}
            required
          />
          <Form.Control.Feedback type="invalid">
            this is required!
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
            this is required!
          </Form.Control.Feedback>
        </Form.Group>

        


        <Button
          disabled={
            !(
              userFormData.ageMin &&
              userFormData.ageMax &&
              userFormData.sexOrientation &&
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

export default InitPreferenceForm;