import React from "react";
import { Container,  Card, Row} from "react-bootstrap";
import "../../styles/profileList.css";

const AllProfiles = (props) => {
  const { bios } = props;
  console.log(bios);
  return (
    
    <Container className="profileList">
      {bios.map((user) => {
        return (
        <Card id="userCard">
          <Card.Header id="cardHead" key={user.userId._id}>
            <a href={`/profile/${user.userId._id}`}>
                <h4>{user.userId.username}</h4>
              </a></Card.Header>
              <Row id="plistinfo">
                <div>
            {user.pictures ? (
              <img className="plistPic" src={user.pictures[0]} />
            ) : null}
            </div>
            {/* <div className="userInfo"> */}
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
