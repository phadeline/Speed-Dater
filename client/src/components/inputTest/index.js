import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "../../utils/mutations";
import { v4 as uuidv4 } from "uuid";
const UploadFile = () => {
  const [mutate, { loading, error }] = useMutation(UPLOAD_FILE);
  const [newUpload, setNewUpload] = useState({
    file: {},
  });
  const onChange = ({
    target: {
      validity,
      files: [file],
    },
  }) => {
    if (validity.valid) {
      var newFile = new File([file], uuidv4(), {
        type: file.type,
        lastModified: file.lastModified,
      });
      setNewUpload(newFile);
    }
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    console.log(newUpload);
    mutate({ variables: { file: newUpload } });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;

  return (
    <React.Fragment>
      <Form.Group>
        <Form.Label htmlFor="input" className="inputText">
          Upload Pictures Here!
        </Form.Label>
        <Form.Control
          type="file"
          name="input"
          onChange={onChange}
          required
          accept="image/png, image/gif, image/jpeg"
        />
        {/* <input type="file" required onChange={onChange}/> */}
        <Button type="submit" onClick={handleInputSubmit}>
          Submit
        </Button>
      </Form.Group>
    </React.Fragment>
  );
};

export default UploadFile;
