import React from "react";
import { useMutation } from "@apollo/client";
import { ACCEPT_CONNECTION, DELETE_REQUEST } from "../../utils/mutations";

function ConnectionRequest(props) {
  const [acceptConnection] = useMutation(ACCEPT_CONNECTION);
  const [deleteRequest] = useMutation(DELETE_REQUEST);
  const deleteReqHandler = async (userId) => {
    try {
      const { data } = await deleteRequest({
        variables: { userId: userId },
      }).then(() => window.location.reload());
    } catch (err) {
      console.error(err);
    }
  };
  const acceptConHandler = async (userId) => {
    try {
      const { data } = await acceptConnection({
        variables: { userId: userId },
      }).then(() => window.location.reload());
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div key={props._id} className="requestCard">
      <a href={`/profile/${props._id}`}>
        <h4>{props.username}</h4>
      </a>
      <button className="acceptBtn" onClick={() => acceptConHandler(props._id)}>
        Accept Request
      </button>
      <button className="rejectBtn" onClick={() => deleteReqHandler(props._id)}>
        Reject Request
      </button>
    </div>
  );
}

export default ConnectionRequest;
