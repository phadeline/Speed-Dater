import React from "react";
import { Container, Card, Row } from "react-bootstrap";
import "../../styles/profileList.css";
import { Link } from "react-router-dom";

const AllProfiles = (props) => {
  const { bios } = props;
  console.log(bios);
  return (
    <Container className="profileList">
      {bios.map((user) => {
        return (
          <Card id="userCard">
            <Card.Header id="cardHead" key={user.userId._id}>
              <Link to={`/profile/${user.userId._id}`}>
                <h4>{user.userId.username}</h4>
              </Link>
            </Card.Header>
            <Row id="plistinfo">
              <div>
                {user.pictures ? (
                  <img className="plistPic" src={user.pictures[0]} />
                ) : null}
              </div>
              <div id="writtenInfo">
                <p>{user.bio}</p>
                <h6>
                  {user.age} || {user.gender} || {user.location}
                </h6>
              </div>
            </Row>
          </Card>
        );
      })}
    </Container>
  );
};

export default AllProfiles;
