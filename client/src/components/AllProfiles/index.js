import React from "react";

const AllProfiles = (props) => {
  const { bios } = props;
  console.log(bios);
  return (
    <div className="profileList">
      {bios.map((user) => {
        return (
          <div className="userDiv" key={user.userId._id}>
            {user.pictures ? (
              <img className="plistPic" src={user.pictures[0]} />
            ) : null}
            <div className="userInfo">
              <a href={`/profile/${user.userId._id}`}>
                <h4>{user.userId.username}</h4>
              </a>
              <h6>
                {user.age} || {user.gender} || {user.location}
              </h6>
              <p>{user.bio}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllProfiles;
