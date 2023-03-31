import React from "react";
import Auth from "../../utils/auth";

//styling
const styles = {
  nav: {
    height: "70px",
    textAlign: "center",
    flexDirection: "row",
    color: "black",
    fontSize: "16px",
  },
  a: {
    marginRight: "26px",
    fontSize: "20px",
  },
};

//function to create the nav bar
function Nav() {
  // const userLogout = () => {
  //   Auth.logout();
  // };

  function userLogout() {
    Auth.logout();
  }

  return (
    <nav style={styles.nav}>
      <a style={styles.a} href="/">
        Landing
      </a>
      <a style={styles.a} href="/login">
        Login
      </a>
      <a style={styles.a} href="/dashboard">
        Dashboard
      </a>
      <a style={styles.a} href="/profile">
        Profile
      </a>
      <a style={styles.a} href="/chat">
        Chat
      </a>
      <a style={styles.a} href="/editbio">
        Edit Bio
      </a>
      <button className="logout" onClick={userLogout} style={styles.a}>
        Logout
      </button>
    </nav>
  );
}

//exports the nav generating function
export default Nav;
