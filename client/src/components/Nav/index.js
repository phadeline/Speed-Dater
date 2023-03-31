import React from 'react';

//styling
const styles = {
    nav: {
        height: '70px',
        textAlign: 'center',
        flexDirection: 'row',
        color: 'black',
        fontSize: '16px'
    },
    a: {
      marginRight: '26px',
      fontSize: '20px'
    }
};

//function to create the nav bar
function Nav() {
  
   
    return (
      <nav style={styles.nav}>
        
        <a style={styles.a} href="/">Landing</a>
        <a style={styles.a} href="/login">Login</a>
        <a style={styles.a} href="/dashboard">Dashboard</a>
        <a style={styles.a} href="/profile">Profile</a>
        <a style={styles.a} href="/chat">Chat</a>
        <a style={styles.a} href="/editbio">Edit Bio</a>

        
      </nav>
    )
  }

//exports the nav generating function
export default Nav;
