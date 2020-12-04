"use strict";
const Async = require("async");
const fs = require("fs");
const readline = require("readline");
const path = require("path");
// const _ = require("lodash");
// const Pluralize = require("pluralize");
const pagesJSON = require("./pagesJSON");

Async.auto(
  {
    get_data: function (callback) {
      console.log("in get_data: ", __dirname);
      const target = "Paginas";
      var targetFolder = path.join("../src/Components/", target);
      if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder);
      }
      callback(null, targetFolder);
    },
    main_loop: [
      "get_data",
      function (results, callback) {
        console.log("in main loop: ");
        pagesJSON.data.forEach((element) => {
          // console.log(element.Name);
          if (element.UsePage === "") {
            fs.writeFile(
              `${results.get_data}/${element.PageName}.js`,
              "Hello content!",
              function (err) {
                if (err) throw err;
                console.log("Saved!");
              }
            );
          }
        });
      },
    ],
  },
  function (err, results) {
    console.log("err = ", err);
    // console.log('results = ', results);
  }
);
