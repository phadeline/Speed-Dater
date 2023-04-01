import React from "react";
import { Container, Carousel } from "react-bootstrap";
import "../../index.css";
import { DELETE_CONNECTION } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import ConnectionRequest from "../connectionRequest";

const DashboardComponent = ({ myUser, myBio, myPreference }) => {
  const [deleteConnection] = useMutation(DELETE_CONNECTION);

  const deleteConHandler = async (userId) => {
    try {
      const { data } = deleteConnection({ variables: { userId: userId } }).then(
        () => window.location.reload()
      );
    } catch (err) {
      console.error(err);
    }
  };

  if (!myBio || !myPreference) {
    return <h1>Please add a bio and preferences</h1>;
  }
  return (
    <Container id="case">
      <section id="profileSnip">
        <div id="profileBox">
          <div>
            <h3 id="dashUsername"> {myUser.username} </h3>
          </div>
          {myBio.pictures && (
            <div id="usersPicture">
              <img
                className="profilePicture col-lg-12 col-md-12 col-sm-12"
                src={myBio.pictures[0]}
                alt={`${myUser.username}'s profile picture`}
              ></img>
            </div>
          )}
          <p id="dashGender" className="dashDetails">
            {myBio.gender} <span id="dashAge">{myBio.age}</span>
          </p>
          <p id="dashOrientation" className="dashDetails">
            {myPreference.sexOrientation}
          </p>
          <p id="dashLocation" className="dashDetails">
            {myBio.location}
          </p>
          <div>
            <h4>My Preferences</h4>
            <p>Minimum Age:{myPreference.ageMin}</p>
            <p>Maximum Age:{myPreference.ageMax}</p>
            <p>Interested In:{myPreference.gender}</p>
            <p>Preferred Location: {myPreference.location}</p>
          </div>
        </div>
      </section>
      <section id="bioSnip">
        <div id="bioDive">
          <div>
            <h3>My Bio</h3>
          </div>
          <div id="dashbioContent">
            <p id="dashBioSummary">{myBio.bio}</p>
            <h4>Interests:</h4>
            <p id="dashInterests">{myBio.interests}</p>
          </div>
          <div className="imgSlider">
            <Carousel interval={null} wrap>
              {myBio.pictures
                ? myBio.pictures.map((picture, index) => {
                    return (
                      <Carousel.Item key={index}>
                        <img
                          className="sliderimgDash"
                          src={picture}
                          key={picture}
                        ></img>
                      </Carousel.Item>
                    );
                  })
                : null}
            </Carousel>
          </div>
        </div>
      </section>
      <section id="connectionList">
        <section id="connectionRequest">
          <h3>Connection Requests</h3>
          {myUser.connectRequest &&
            myUser.connectRequest.map((user) => {
              return (
                <ConnectionRequest _id={user._id} username={user.username} />
              );
            })}
        </section>
        <div>
          <h3> Your Connections</h3>
        </div>
        <div id="dashFriends">
          {myUser.connections &&
            myUser.connections.map((connection) => {
              return (
                <div key={connection._id} className="eachfriend">
                  <a href={`/profile/${connection._id}`}>
                    {connection.username}
                  </a>
                  <button
                    value={connection._id}
                    onClick={() => deleteConHandler(connection._id)}
                  >
                    Remove Friend
                  </button>
                </div>
              );
            })}
        </div>
      </section>
    </Container>
  );
};

export default DashboardComponent;
