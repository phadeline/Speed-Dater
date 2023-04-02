import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_BIO } from "../../utils/queries";
import UploadFile from "../../components/inputTest";

const UploadPicturePage = () => {
  const { loading, data } = useQuery(QUERY_BIO);
  const me = data?.me.pictures || {};
  const [newUpload, setNewUpload] = useState;

  return (
    <div className="imgUpload">
      <h3>Upload More Pictures Here!</h3>
      <UploadFile />
    </div>
  );
};
