import React from "react";
import { useMutation } from "@apollo/client";
import {
  ADD_CONNECTION,
  ACCEPT_CONNECTION,
  DELETE_REQUEST,
  DELETE_CONNECTION,
} from "../../utils/mutations";

const ConnectionButtons = async ({ userId }) => {
  const { addConnection, error: addError } = useMutation(ADD_CONNECTION);
  const { acceptConnection, error: acceptError } =
    useMutation(ACCEPT_CONNECTION);
  const { deleteRequest, error: delReqError } = useMutation(DELETE_REQUEST);
  const { deleteConnection, error: delConnection } =
    useMutation(DELETE_CONNECTION);

  const addConHandler = async () => {
    await addConnection(userId);
  };
  const accConHandler = async () => {
    await acceptConnection(userId);
  };
  const delReqHandler = async () => {
    await deleteRequest(userId);
  };
  const delConHandler = async () => {
    await deleteConnection(userId);
  };

  return (
    <div className="buttons">
      <button onclick={addConHandler}>Add Connection</button>
      <button onclick={accConHandler}>Accept Request</button>
      <button onclick={delReqHandler}>Delete Request</button>
      <button onclick={delConHandler}>Delete Connection</button>
    </div>
  );
};

export default ConnectionButtons;
