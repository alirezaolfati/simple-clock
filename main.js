changeTime = () => {
  let time = new Date();
  let hr = time.getHours();
  let mn = time.getMinutes();
  let sec = time.getSeconds();
  document.getElementById("hr").innerText = hr;
  document.getElementById("mn").innerText = mn;
  document.getElementById("sec").innerText = sec;
  setTimeout("changeTime()", 500);
};
