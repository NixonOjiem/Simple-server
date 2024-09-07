var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  let dataArray = [
    {id: 1, name: 'John', age: 25},
    {id: 2, name: 'Jane', age: 30},
    {id: 3, name: 'Bob', age: 35},
    {id: 4, name: "Nicko", age: 27},
    {id: 5, name: "Fatma", age: 20}
  ];
  // return results from API
  res.json({
    message: 'Users listing',
    data: dataArray
  });
});

module.exports = router;
