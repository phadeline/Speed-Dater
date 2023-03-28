import React from 'react';
import '../../index.css'




const Dashboard = () => {


  return (
    <container id='case'>
   <section id='profileSnip'>
    <div>
    <h3 id='dashUsername'> Username</h3> 
    </div>
    <div id='usersPicture'></div>
    <p id='dashGender' class='dashDetails'>gender <span id='dashAge'>, 28 </span></p>
    <p id='dashOrientation' class='dashDetails'>straight</p>
    <p id='dashLocation' class='dashDetails'>Belivdere, NJ</p>
    
    </section>
    <section id='bioSnip' >
      <div>
      <h3>Bio Section</h3>
      </div>
      <div id='dashbioContent'>
        <p id='dashBioSummary'>This is my SpeedDater app summary area where I describe myself 
        to potential matches that I might meet! This is some more filler to add to the Bio to fill 
        out the div and test how the page will look!</p>
        <h4>Interests:</h4>
        <p id='dashInterests'><ul>
          <li>Skiing</li>
          <li>Cooking</li>
            <li>Traveling</li></ul></p>
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

export default Dashboard;
