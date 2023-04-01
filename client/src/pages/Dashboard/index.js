import React from "react";
import { useQuery } from "@apollo/client";
import DashboardComponent from "../../components/Dashboard";

import { QUERY_USER } from "../../utils/queries";
import { QUERY_BIO } from "../../utils/queries";
import { QUERY_PREFERENCE } from "../../utils/queries";

const Dashboard = () => {
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
    <div className="dashpage">
      <h1> Your Dashboard page</h1>
      <div>
        <DashboardComponent
          myBio={myBio}
          myUser={myUser}
          myPreference={myPreference}
        />
      </div>
    </div>
  );
};

export default Dashboard;
