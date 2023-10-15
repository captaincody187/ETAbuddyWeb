
calculateEta = () => {

    // Get input from the user and divide by 55 mph
    const milage = parseFloat(document.getElementById('milage').value);
    const eta = milage / 55;

    // Convert ETA to milliseconds (1 hour = 3600000 milliseconds)
    const intEta = Math.floor(eta * 3600000);
  
    // Create a new Date object
    const now = new Date();
  
    // Calculate the ETA time in milliseconds
    const etaTime = now.getTime() + intEta;
  
    // Create a new Date object with the ETA time
    const etaDate = new Date(etaTime);
  
    // Set the time zone to Central Standard Time (CST)
    const options = { timeZone: 'America/Chicago' };
    
    // Format the ETA time to a string in CST
    const etaString = etaDate.toLocaleString('en-US',
    // Format for mitlitary time 
    { hour12: false },
    options);
  
    document.getElementById("dateTime").innerHTML = etaString + " CST";
    console.log('captainCody was here');

    // Alert to handle input value of 0
    if(milage == 0){
        alert('Please enter a valid number')
    } 
    
  }

  // Clear the display area

  clearEta = () => {
    return document.getElementById('dateTime',).innerHTML = "";
  }
  

