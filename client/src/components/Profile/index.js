import React from "react";
import image from "../../image/woman.png";
import "../../styles/profile.css";

const MyProfile = ({ myUser, myBio, myPreference }) => {
  // if (!myUser.length) {
  //   return <h2>Create Your Profile</h2>;
  // }
  console.log(myBio);
  console.log(myPreference);
  console.log(myUser);
  return (
    <div className="bigContainer">
      <h2 className="welcome">Welcome To Your Profile, {myUser.username} </h2>
      <div className="biopreferenceContainer">
        <div className="imagepreference col-lg-3 col-md-4 col-sm-12">
          {/* <div className="imagecontainer"> */}
          {/* <img
            className="profilePicture col-lg-12 col-md-12 col-sm-12"
            src={myBio.pictures[0]}
            alt="woman"
          ></img> */}
          {/* </div> */}
          <div className="preferences">
            <h2 className="preferenceTitle">Your Preferences</h2>
            <h4>Minimum Age: {myPreference.ageMin}</h4>
            <h4>Maximum Age: {myPreference.ageMax}</h4>
            <h4>Sex Orientation: {myPreference.sexOrientation}</h4>
            <h4>Gender: {myPreference.gender}</h4>
            <h4>Location: {myPreference.location}</h4>
          </div>
        </div>
        <div className="biosection col-lg-8 col-md-8 col-sm-12">
          <h2 className="bioTitle"> Your Bio</h2>
          <div className="section col-md-12 col-sm-12">
            <h3 className="col-lg-3 col-md-12 col-sm-12 sectionTitle">
              Summary:
            </h3>
            <h3 className="col-lg-9 col-md-12 col-sm-12 sectionInfo">
              {myBio.bio}
            </h3>
          </div>
          <div className="section col-md-12 col-sm-12">
            <h3 className="col-lg-3 col-md-12 col-sm-12 sectionTitle">
              Interests:
            </h3>
            <h3 className="col-lg-9 col-md-12 col-sm-12 sectionInfo">
              {myBio.interests}
            </h3>
          </div>
          <div className="section col-md-12 col-sm-12">
            <h3 className="col-lg-3 col-md-12 col-sm-12 sectionTitle">Age:</h3>
            <h3 className="col-lg-9 col-md-2 col-sm-2 sectionInfo">
              {myBio.age}
            </h3>
          </div>
          <div className="section col-md-12 col-sm-12">
            <h3 className="col-lg-3 col-md-12 col-sm-12 sectionTitle">
              Gender:
            </h3>
            <h3 className="col-lg-9 col-md-2 col-sm-2 sectionInfo">
              {myBio.gender}
            </h3>
          </div>
          <div className="section col-md-12 col-sm-12">
            <h3 className="col-lg-3 col-md-12 col-sm-12 sectionTitle">
              Location:
            </h3>
            <h3 className="col-lg-9 col-md-2 col-sm-2 sectionInfo">
              {myBio.location}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
