import React from "react";

const myProfile = ({ myBio, myUser, myPreference }) => {
  //   if (!myBio.length || !myUser.length || !myPreference.length) {
  //     return <h2>Create Your Profile</h2>;
  //   }
  return (
    <div>
      <h2>Welcome to your Profile {myUser.username} </h2>
    </div>
  );
};

export default myProfile;
