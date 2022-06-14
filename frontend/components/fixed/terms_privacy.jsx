import React from "react";

const TermsPrivacy=(props)=> {

    const today = new Date();
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let date = today.getDate()
    let month = today.getMonth()
    let day = today.getDay()
    const newDay = `${days[day]}, ${months[month]} ${date}`

  return(
    <div className="webpage terms-privacy">
      <h1>My Co-opt, Inc. Privacy Policy </h1>
      <h3>Effective Date: {newDay}</h3>
      Long ago, in the beautiful kingdom of Hyrule surrounded by mountains and forests... legends told of an omnipotent and omniscient Golden Power that resided in a hidden land.
      Many people aggressively sought to enter the hidden Golden Land... But no one ever returned.
      One day evil power began to flow from the Golden Land... So the King commanded seven wise men to seal the gate to the Land of the Golden Power.
      That seal should have remained for all time...
      <br />
      <br />
      ...But, when these events were obscured by the mists of time and became legend...
      <br />
      <br />
      A mysterious wizard known as Agahnim came to Hyrule to release the seal. He eliminated the good King of Hyrule...
      <br />
      <br />
      Through evil magic, he began to make descendants of the seven wise men vanish, one after another.
      <br />
      <br />
      And the time of destiny for Princess Zelda is drawing near.
    </div>
  )
}

export default TermsPrivacy;