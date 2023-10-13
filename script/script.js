// Get milage from input box
// divide milage by 55
// return value in date time format to display

calculateEta = () => {
    let currentTime = new Date();
    const mile = document.getElementById('milage').value;
 
    console.log(currentTime + mile / 55);   
}

let ut = document.getElementById("updatedTime")
