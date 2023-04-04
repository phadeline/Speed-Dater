import React from "react";
import auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { ALL_BIOS } from "../../utils/queries";
import AllProfiles from "../../components/AllProfiles";
import "../../styles/profileList.css";

const ProfileList = () => {
  const { loading: bioLoading, data: bioData } = useQuery(ALL_BIOS);
  const bios = bioData?.bios || [];

  if (!auth.loggedIn()) {
    window.location.assign("/login");
  } else {
    if (bioLoading) {
      return <h1>Loading...</h1>;
    }
    return (
      <div id="profilelistpage">
        <h1 id="banner"> Find New Connections!</h1>
        <AllProfiles bios={bios} />
      </div>
    );
  }
};

export default ProfileList;
