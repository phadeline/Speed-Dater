import React from "react";
import InitBioForm from "../../components/BioInputTest";
import UploadFile from "../../components/inputTest";
import auth from "../../utils/auth";

const InitBioPage = () => {
auth.checkAuth();
  return (
    <div>
      <h1 className="text-center"> Create your Bio</h1>
      <InitBioForm />
      {/* <UploadFile /> */}
    </div>
  );
};

export default InitBioPage;
