import React from "react";
import auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { ALL_BIOS } from "../../utils/queries";
import AllProfiles from "../../components/AllProfiles";
import "../../styles/profileList.css";

const ProfileList = () => {
  const { loading: bioLoading, data: bioData } = useQuery(ALL_BIOS);
  const bios = bioData?.bios || [];
  if (bioLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <AllProfiles bios={bios} />
    </div>
  );
};

export default ProfileList;
