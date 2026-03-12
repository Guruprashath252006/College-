import React from 'react'

const Attendence = () => {
    let title="Attendance Guidelines"
 
   let para="Start by listing names and dates on your page. Mark status daily—use checks for present, crosses for absent, or notes for late arrivals. Review weekly to spot patterns and encourage regular attendance through reminders"
  let tracking="Daily Tracking Steps"
  

   return (

    <>
    <h1>{title}</h1>
    <p>{para}</p>
    <h3>{tracking}</h3>
<div>
    <p>Begin the day by opening the page and noting the date. Go through the list, updating each person's status as they arrive. End with a quick save or printout for backups.</p>
</div>
<br/>
<p>Handle absences by adding reasons if needed, like "sick" or "permission." This builds trust and helps plan ahead. Reward high attendance with shoutouts on the page</p>


    

    </>
  )
}

export default Attendence