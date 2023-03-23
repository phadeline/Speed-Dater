import React from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "../../utils/mutations";

const UploadFile = () => {
  const [mutate, { loading, error }] = useMutation(UPLOAD_FILE);
  const onChange = ({
    target: {
      validity,
      files: [file],
    },
  }) => validity.valid && mutate({ variables: { file } });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;

  return (
    <React.Fragment>
      <input type="file" required onChange={onChange} />
    </React.Fragment>
  );
};

export default UploadFile;
