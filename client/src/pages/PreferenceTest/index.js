import React from "react";
import auth from "../../utils/auth";
import InitPreferenceForm from "../../components/PreferenceInputTest";
import { useNavigate } from "react-router-dom";

const InitPreferencePage = () => {
  const navigate = useNavigate();
  if (!auth.loggedIn()) {
    navigate("/login");
  } else {
    return (
      <div>
        <h1 className="text-center"> Add Your Preferences</h1>

        <InitPreferenceForm />
      </div>
    );
  }
};

export default InitPreferencePage;
