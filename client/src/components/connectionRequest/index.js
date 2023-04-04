import React from "react";
import { useMutation } from "@apollo/client";
import { ACCEPT_CONNECTION, DELETE_REQUEST } from "../../utils/mutations";
import { Button, Card } from "react-bootstrap";
import "../../styles/dashboard.css";
import { Link, useNavigate } from "react-router-dom";

function ConnectionRequest(props) {
  const navigate = useNavigate();
  const [acceptConnection] = useMutation(ACCEPT_CONNECTION);
  const [deleteRequest] = useMutation(DELETE_REQUEST);
  const deleteReqHandler = async (userId) => {
    try {
      const { data } = await deleteRequest({
        variables: { userId: userId },
      }).then(() => navigate("/dashboard"));
    } catch (err) {
      console.error(err);
    }
  };
  const acceptConHandler = async (userId) => {
    try {
      const { data } = await acceptConnection({
        variables: { userId: userId },
      }).then(() => navigate("/dashboard"));
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div key={props._id} className="requestCard">
      <Link id="reqFri" to={`/profile/${props._id}`}>
        {props.username}
      </Link>
      <Button
        variant="success"
        size="sm"
        className="acceptBtn"
        onClick={() => acceptConHandler(props._id)}
      >
        Accept
      </Button>
      <Button
        size="sm"
        variant="danger"
        className="rejectBtn"
        onClick={() => deleteReqHandler(props._id)}
      >
        Delete
      </Button>
    </div>
  );
}

export default ConnectionRequest;
