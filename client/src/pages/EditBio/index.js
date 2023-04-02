import React from "react";
import { useQuery } from "@apollo/client";
import EditBioForm from "../../components/BioInputEdit";
import { QUERY_BIO } from "../../utils/queries";
import Nav from "../../components/Nav";
import auth from "../../utils/auth";


const EditBio = () => {
  auth.checkAuth();
  const { loading: bioLoading, data: bioData } = useQuery(QUERY_BIO);


  const myBio = bioData?.bio || {};


  if (bioLoading) {
    return <div> Loading...</div>;
  }
  return (
    <div>
    <Nav></Nav>
    
      <h1> Edit Your Bio</h1>
      <p>{myBio.bio}</p>
      <div>
    
        <EditBioForm myBio={myBio}  />
        {/* } */}
      </div>
    </div>
  );
};

export default EditBio;
