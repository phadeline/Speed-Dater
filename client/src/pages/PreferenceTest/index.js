import React from "react";
import auth from "../../utils/auth";
import InitPreferenceForm from "../../components/PreferenceInputTest";

const InitPreferencePage = () => {
  if (!auth.loggedIn()) {
    window.location.assign("/login");
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
