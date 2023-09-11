const express = require("express");
const app = express();
const port = 3000;

// const utc = new Date(
//   new Date().getTime() + newDate().getTimezoneOffset() * 60000
// );
let date = new Date();
let day = date.getDay();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const response = app.get("/api", (req, res) => {
  const { slack_name, track } = req.query;
  res.send({
    slack_name: slack_name,
    track: track,
    current_day: daysOfWeek[day],
    utc_time: date.toISOString().split(".")[0] + "Z",
    github_file_url:
      "https://github.com/TubbySparks/first-zuri-task/blob/main/index.js",
    github_repo_url: "https://github.com/TubbySparks/first-zuri-task",
    status_code: 200,
  });
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`);
});
