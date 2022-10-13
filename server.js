const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const apiRoutes = require("./api")
const path = require('path');


// create a GET route
app.use('/api', apiRoutes);

app.get("/*.*", (req, res) => {
    // console.log(req.url);
    res.sendFile(req.url, {root: path.join(__dirname, 'client/build')});
  })

  app.get("*", (req, res) => {
    // console.log(req);
    res.sendFile("/client/build/index.html", {root: path.join(__dirname)});
  })

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6