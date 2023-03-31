import React from 'react';
import '../../index.css'




const DashboardComponent = ({ myUser, myBio, myPreference }) => {

  return (
    <container id='case'>
   <section id='profileSnip'>
    <div>
    <h3 id='dashUsername'> {myUser.username} </h3> 
    </div>
    <div id='usersPicture'>
      <img
            className="profilePicture col-lg-12 col-md-12 col-sm-12"
            src={myBio.pictures[1]}
            alt="woman"
          ></img>
          </div>
    <p id='dashGender' class='dashDetails'>{myBio.gender} <span id='dashAge'>, 28 </span></p>
    <p id='dashOrientation' class='dashDetails'>{myPreference.sexOrientation}</p>
    <p id='dashLocation' class='dashDetails'>{myBio.location}</p>
    
    <div>
      <h4>My Preferences</h4>
      <p>Minimum Age:{myPreference.ageMin}</p>
      <p>Maximum Age:{myPreference.ageMax}</p>
      <p>Interested In:{myPreference.gender}</p>
      <p>Preferred Location: {myPreference.location}</p>
    </div>
    </section>
    <section id='bioSnip' >
      <div>
      <h3>Bio Section</h3>
      </div>
      <div id='dashbioContent'>
        <p id='dashBioSummary'>{myBio.bio}</p>
        <h4>Interests:</h4>
        <p id='dashInterests'>
          {myBio.interests}
         </p>
      </div>

      </section>
      <section id='connectionList'>
        <div>
        <h3> Your Matches</h3>
        </div>
        <div id='dashFriends'>
          <p class='eachfriend'>friend one</p>
          <p class='eachfriend'>friend one</p>
          <p class='eachfriend'>friend one</p>
          <p class='eachfriend'>friend one</p>
          <p class='eachfriend'>friend one</p>
        </div>
        
      </section>

   </container>
  )
}; 

export default DashboardComponent;
