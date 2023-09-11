const express = require("express");
const app = express();
const port = 3000;

const utc = new Date(
  new Date().getTime() + newDate().getTimezoneOffset() * 60000
);

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
  res.send({
    slack_name: slack_name,
    current_day: daysOfWeek[new Date().getDay()],
    utc_time: utc.toISOString().split(".")[0] + "Z",
    track: "track",
    github_file_url:
      "https://github.com/TubbySparks/first-zuri-task/blob/main/index.js",
    github_repo_url: "https://github.com/TubbySparks/first-zuri-task",
    status_code: 200,
  });
});

const { slack_name, track } = req.params;

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`);
});
