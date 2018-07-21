function pluralize(count, word) {
  return count === 1 ? count + " " + word : count + " " + word + "s";
}

function getTimeDuration() {
  // July 20, 2017 11:00AM
  var marriageDate = moment(1500566400000).locale("en");
  // today plus one for some reason?
  var now = moment()
    .add(1, "day")
    .locale("en");
  var time = moment.duration(now.diff(marriageDate));

  const { days, hours, minutes, months, seconds, years } = time._data;

  return [
    ["year", years],
    ["month", months],
    ["day", days],
    ["hour", hours],
    ["minute", minutes],
    ["second", seconds]
  ];
}

function buildDurationString(dataArr) {
  return dataArr
    .map(unitArr => {
      if (unitArr[1] > 0) {
        return pluralize(unitArr[1], unitArr[0]);
      }
    })
    .filter(item => {
      return !!item;
    })
    .join(", ");
}

function updateDom() {
  setTimeout(function() {
    $("#loader").hide();
  }, 1000);

  setInterval(function() {
    let dataObj = getTimeDuration();
    let result = buildDurationString(dataObj);
    $("h2").text(result);
  }, 1000);
}

updateDom();
