var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var router = express.Router();


app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;
var host = '127.0.0.1'
var items = [];

app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
});

// Get list of Items
router.get('/', function(req, res){
  res.send({Items : items})
})

// Update list of Items
router.post('/', function(req, res){
  var item = req.body.item
  let idx = items.findIndex((obj)=>{return obj.Id == item.Id})
  if(idx >= 0)
    items[idx] = item;
  else
    items.push(item)

  res.send({items : items})
})

app.use('/api', router);

app.listen(port, host);

console.log("listening on port "+port);
