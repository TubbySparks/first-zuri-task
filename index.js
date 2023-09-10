const express = require("express");
const app = express();
const port = 3000;

app.get((req, res) => {
  res.send({
    slack_name: "TubbySparks",
    current_day: "Sunday",
    utc_time: "2023-08-21T15:04:05Z",
    track: "backend",
    github_file_url: "",
    github_repo_url: "",
    status_code: "200",
  });
});

app.use((req, res) => {
  console.log("we have a new request");
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`);
});
