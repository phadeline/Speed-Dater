import React from "react";
import InitBioForm from "../../components/BioInputTest";
import auth from "../../utils/auth";

const InitBioPage = () => {
  if (!auth.loggedIn()) {
    window.location.assign("/login");
  } else {
    return (
      <div>
        <h1 className="text-center"> Create your Bio</h1>
        <InitBioForm />
      </div>
    );
  }
};

export default InitBioPage;
