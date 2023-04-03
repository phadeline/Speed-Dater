import React, { useState } from "react";
import { Container, Carousel, Button, Row, Col, Card, Figure } from "react-bootstrap";
import "../../styles/dashboard.css";
import { DELETE_CONNECTION } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import ConnectionRequest from "../connectionRequest";
import UploadFile from "../inputTest";


const DashboardComponent = ({ myUser, myBio, myPreference }) => {
  const [deleteConnection] = useMutation(DELETE_CONNECTION);
  const [upload, setUpload] = useState(false);
  const deleteConHandler = async (userId) => {
    try {
      const { data } = deleteConnection({ variables: { userId: userId } }).then(
        () => window.location.reload()
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpload = () => {
    setUpload(true);
  };

  if (!myBio || !myPreference) {
    return <h1>Please add a bio and preferences</h1>;
  }

 

  return (
    <Container id="container">
      
    <Row>
      <Col md={3} id="first"> 
      <Card id="card1">
      <Card.Header as="h5" id='head1'>{myUser.username}</Card.Header>

          
          {myBio.pictures && (
            <div id="usersPicture">
              <img id="propic"
                className="profilePicture col-lg-12 col-md-12 col-sm-12"
                src={myBio.pictures[0]}
                alt={`${myUser.username}'s profile picture`}
              ></img>
            </div>
          )}
          <p id="dashGender" className="dashDetails">
            {myBio.gender}, <span id="dashAge">{myBio.age}</span>
          </p>
          <p id="dashOrientation" className="dashDetails">
            {myPreference.sexOrientation}
          </p>
          <p id="dashLocation" className="dashDetails">
            {myBio.location}
          </p>
          
            <h4>My Preferences</h4>
            <ul>
            <li>Minimum Age:{myPreference.ageMin}</li>
            <li>Maximum Age:{myPreference.ageMax}</li>
            <li>Interested In:{myPreference.gender}</li>
            <li>Preferred Location: {myPreference.location}</li>
            </ul>
          
          </Card>
        </Col>
      <Col lg={5} id="second">
        <Card id='card2'>
      <Card.Header as="h5" id="head2">My Bio</Card.Header>
           
          
          <div id="dashbioContent">
            <p id="dashBioSummary">{myBio.bio}</p>
            <h4>Interests:</h4>
            <p id="dashInterests">{myBio.interests}</p>
          </div>
          <div className="imgSlider">
            {myBio.pictures.length && !upload ? (
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
            ) : null}
          </div>
          <div>
          {!upload ? (
            <Button className="btn" id='imgBtn' onClick={handleUpload}>
              Add Pictures
            </Button>
          ) : (
            <UploadFile className="dashPic" />
          )}
        </div>
      </Card>
      </Col>
      <Col id='third'>
      <Card id='card3'>
      <Card.Header as="h5"  id="connectTitle">Connections</Card.Header>
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
      
      </Card>
      </Col> 
    </Row>
    
  </Container>
              );
            };










export default DashboardComponent;
