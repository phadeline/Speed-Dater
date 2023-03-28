import React from "react";
import { useQuery } from "@apollo/client";
import myProfile from "../../components/Profile";

import { QUERY_USER } from "../../utils/queries";
import { QUERY_BIO } from "../../utils/queries";
import { QUERY_PREFERENCE } from "../../utils/queries";

const Profile = () => {
  const Profile = () => {
    const { loading: bioLoading, data: bioData } = useQuery(QUERY_BIO);
    const { loading: userLoading, data: userData } = useQuery(QUERY_USER);
    const { loading: preferenceLoading, data: preferenceData } =
      useQuery(QUERY_PREFERENCE);

    const myBio = bioData?.myBio || [];
    const myUser = userData?.me || [];
    const myPreference = preferenceData?.myPreference || [];

    return (
      <div>
        <h1> Your Profile page</h1>
        <div>
          {bioLoading || userLoading || preferenceLoading ? (
            <div> Loading...</div>
          ) : (
            <myProfile
              myBio={myBio}
              myUser={myUser}
              myPreference={myPreference}
            />
          )}
        </div>
      </div>
    );
  };
};

export default Profile;
