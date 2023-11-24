// Captain Cody was here

let currentETA = "";
let tenHoursAdded = false;
let etaStringG;

calculateEta = () => {
  tenHoursAdded = false;

  const milage = parseFloat(
    document.getElementById("floatingInputValue").value
  );
  const eta = milage / 55;
  const intEta = Math.floor(eta * 3600000);
  const now = new Date();
  const etaTime = now.getTime() + intEta;
  const etaDate = new Date(etaTime);
  const options = { timeZone: "America/Chicago" };
  const etaString = etaDate.toLocaleString("en-US", { hour12: false }, options);
  etaStringG = etaString;

  document.getElementById("dateTime").innerHTML = etaString + " CST";

  const slider = document.getElementById("flexSwitchCheckDefault");
  if (slider.checked) {
    slider.checked = false;
  }

  tenHoursAdded = false;

  const checkbox = document.getElementById("flexSwitchCheckDefault");
  if (checkbox && checkbox.checked) {
    checkbox.checked = false;
  }

  // Store ETA in sessionStorage
  sessionStorage.setItem("storedETA", JSON.stringify(etaStringG));
};

window.onload = function () {
  const storedData = sessionStorage.getItem("storedETA");
  etaStringG = storedData ? JSON.parse(storedData) : null;

  if (etaStringG) {
    document.getElementById("dateTime").innerHTML = etaStringG + " CST";
  }
};

const checkbox = document.getElementById("flexSwitchCheckDefault");

tenBreak = () => {
  const checkbox = document.getElementById("flexSwitchCheckDefault");

  if (checkbox.checked && !tenHoursAdded) {
    const etaDate = new Date(etaStringG);
    etaDate.setTime(etaDate.getTime() + 36000000);
    const updatedEtaString = etaDate.toLocaleString("en-US", { hour12: false });
    document.getElementById("dateTime").innerHTML = updatedEtaString + " CST";
    etaStringG = updatedEtaString;
    tenHoursAdded = true;
    console.log("Updated ETA with 10 hours:", updatedEtaString);
  } else if (!checkbox.checked) {
    tenHoursAdded = false;
  }
};

checkbox.addEventListener("change", tenBreak);

storeFunc = () => {
  const etaToStore = currentETA || etaStringG;

  const firstRow = document.getElementById("etaOne");
  const secondRow = document.getElementById("etaTwo");
  const thirdRow = document.getElementById("etaThree");

  if (firstRow.innerHTML === "") {
    firstRow.innerHTML = etaToStore;
  } else if (secondRow.innerHTML === "") {
    secondRow.innerHTML = etaToStore;
  } else if (thirdRow.innerHTML === "") {
    thirdRow.innerHTML = etaToStore;
  } else {
    alert("Please delete an ETA to store another.");
  }
};

clearEta = () => {
  currentETA = "";
  tenHoursAdded = false;
  etaStringG = "";

  document.getElementById("dateTime").innerHTML = "";
  document.getElementById("floatingInputValue").value = null;

  const slider = document.getElementById("flexSwitchCheckDefault");
  if (slider.checked) {
    slider.checked = false;
  }

  // Clear sessionStorage for stored ETA
  sessionStorage.removeItem("storedETA");
};

clearOne = () => {
  return (document.getElementById("etaOne").innerHTML = "");
};

clearTwo = () => {
  return (document.getElementById("etaTwo").innerHTML = "");
};

clearThree = () => {
  return (document.getElementById("etaThree").innerHTML = "");
};

function resetSlider() {
  const checkbox = document.getElementById("flexSwitchCheckDefault");
  if (checkbox && checkbox.checked) {
    checkbox.checked = false;
  }
}

document
  .getElementById("floatingInputValue")
  .addEventListener("click", resetSlider);

toggleText = () => {
  const switchLabel = document.getElementById("switchLabel");
  const checkbox = document.getElementById("flexSwitchCheckDefault");

  if (checkbox.checked) {
    switchLabel.classList.remove("text-muted");
    alert("Ten (10) hours will be added to the ETA");
  } else {
    switchLabel.classList.add("text-muted");
  }
};

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
