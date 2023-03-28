import React from "react";
import image from "../../image/woman.png";
import "../../styles/profile.css";

const MyProfile = ({ myUser, myBio, myPreference }) => {
  // if (!myUser.length) {
  //   return <h2>Create Your Profile</h2>;
  // }
  return (
    <div className="bigContainer">
      <h2 className="welcome">Welcome To Your Profile, {myUser.username} </h2>
      <div className="biopreferenceContainer">
        <div className="imagepreference col-lg-3 col-md-4 col-sm-12">
          {/* <div className="imagecontainer"> */}
          <img
            className="profilePicture col-lg-12 col-md-12 col-sm-12"
            src={image}
            alt="woman"
          ></img>
          {/* </div> */}
          <div className="preferences">
            <h2 className="preferenceTitle">Your Preferences</h2>
            <h4>Minimum Age:</h4>
            <h4>Maximum Age:</h4>
            <h4>Sex Orientation:</h4>
            <h4>Gender:</h4>
            <h4>Location:</h4>
          </div>
        </div>
        <div className="biosection col-lg-8 col-md-8 col-sm-12">
          <h2 className="bioTitle"> Your Bio</h2>
          <div className="section col-md-12 col-sm-12">
            <h3 className="col-lg-3 col-md-12 col-sm-12 sectionTitle">
              Summary:
            </h3>
            <h3 className="col-lg-9 col-md-12 col-sm-12 sectionInfo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </h3>
          </div>
          <div className="section col-md-12 col-sm-12">
            <h3 className="col-lg-3 col-md-12 col-sm-12 sectionTitle">
              Interests:
            </h3>
            <h3 className="col-lg-9 col-md-12 col-sm-12 sectionInfo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </h3>
          </div>
          <div className="section col-md-12 col-sm-12">
            <h3 className="col-lg-3 col-md-12 col-sm-12 sectionTitle">Age:</h3>
            <h3 className="col-lg-9 col-md-2 col-sm-2 sectionInfo">29</h3>
          </div>
          <div className="section col-md-12 col-sm-12">
            <h3 className="col-lg-3 col-md-12 col-sm-12 sectionTitle">
              Gender:
            </h3>
            <h3 className="col-lg-9 col-md-2 col-sm-2 sectionInfo">Female</h3>
          </div>
          <div className="section col-md-12 col-sm-12">
            <h3 className="col-lg-3 col-md-12 col-sm-12 sectionTitle">
              Location:
            </h3>
            <h3 className="col-lg-9 col-md-2 col-sm-2 sectionInfo">NJ</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
