import React from "react";
import { useQuery } from "@apollo/client";
import MyProfile from "../../components/Profile";

import { QUERY_USER } from "../../utils/queries";
import { QUERY_BIO } from "../../utils/queries";
import { QUERY_PREFERENCE } from "../../utils/queries";

const Profile = () => {
  const { loading: bioLoading, data: bioData } = useQuery(QUERY_BIO);
  const { loading: userLoading, data: userData } = useQuery(QUERY_USER);
  const { loading: preferenceLoading, data: preferenceData } =
    useQuery(QUERY_PREFERENCE);

  const myBio = bioData?.bio || {};
  const myUser = userData?.me || {};
  const myPreference = preferenceData?.preference || {};

  if (bioLoading || preferenceLoading || userLoading) {
    return <div> Loading...</div>;
  }
  return (
    <div>
      <h1> Your Profile page</h1>
      <div>
        {/* {userLoading || bioLoading || preferenceLoading ? ( */}
        {/* <div> Loading...</div> */}
        {/* ) : ( */}
        <MyProfile myBio={myBio} myUser={myUser} myPreference={myPreference} />)
        {/* } */}
      </div>
    </div>
  );
};

export default Profile;
