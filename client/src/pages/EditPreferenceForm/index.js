import React from "react";
import { useQuery } from "@apollo/client";
import EditPreferenceForm from "../../components/editPreference";
import { QUERY_PREFERENCE } from "../../utils/queries";
import auth from "../../utils/auth";

const EditPreference = () => {
  const { loading: preferenceLoading, data: preferenceData } = useQuery(QUERY_PREFERENCE);

  const myPreference = preferenceData?.preference || {};

  if (!auth.loggedIn()) {
    window.location.assign("/login");
  } else {
    if (preferenceLoading) {
      return <div> Loading...</div>;
    }
    return (
      <div>
      

        <h1> Edit Your Preferences</h1>
       
        <div>
          <EditPreferenceForm myPreference={myPreference} />
        
        </div>
      </div>
    );
  }
};

export default EditPreference;
