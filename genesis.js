let boatLaunch = false;
let gasLevel = 700;
let crewmateStatus = true;
let instrumentStatus = `green`;
if (gasLevel >= 1000) {
  console.log(`Gas level is good.`);
  boatLaunch = true;
} else {
  console.log(`WARNING: Not enough gas!`);
  boatLaunch = false;
}
if (crewmateStatus && instrumentStatus === `green`) {
  console.log(`Crewmates and instruments are good`);
  boatLaunch = true;
} else {
  console.log(`WARNING: Crewmates or instruments are not good.`);
  boatLaunch = false;
}
if (boatLunch) {
  console.log(`Ready! Set! Go!`);
  console.log(`Bon voyage!`);
} else {
  console.log(`Nope not ready!`);
}
