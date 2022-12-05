const addShakeToElements = () => {
  console.log("laetud");
  const pildid = document.getElementsByTagName("img");
  const nimed = document.getElementsByClassName("nimed");

  for (const pilt of pildid) {
    pilt.classList.add("shake");
  }

  for (const nimi of nimed) {
    nimi.classList.add("shake");
  }
};

if (document.addEventListener) {
  window.addEventListener("load", addShakeToElements, false);
} else {
  window.attachEvent && window.attachEvent("onload", addShakeToElements);
}
