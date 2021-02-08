const getHours = (timestamp) => {
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  var d = new Date(timestamp);
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  var s = addZero(d.getSeconds());
  return  `${h}:${m}:${s}`;
};

export default getHours

