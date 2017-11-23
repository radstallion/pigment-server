var express = require('express');
var app = express();
var server = app.listen(3000,function(){
  console.log('listening on *:3000');
});

var io = require('socket.io').listen(server);

var ks = require('node-key-sender');


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

});






var SerialPort = require('serialport');
var serPort = new SerialPort('COM8', function (err) {
  if (err) {
    return console.log('Error: ', err.message);
  }
});

serPort.on('data',onData)

function arrayBufferToString(buffer){
    var arr = new Uint8Array(buffer);
    var str = String.fromCharCode.apply(String, arr);
    if(/[\u0080-\uffff]/.test(str)){
        throw new Error("this string seems to contain (still encoded) multibytes");
    }
    return str;
}

function onData(data) {
  console.log("on data "+data)
  if(data == "C"){
      emit(data);
  }else if (data == "c") {
      emit(data);
  }else if (data == "S") {
      emit(data);
  }else if (data == "s") {
      emit(data);
  }else if (data == "V") {
      emit(data);
  }else if (data == "v") {
      emit(data);
  }

  else if (data == "B") {
      ks.sendKey(data);
  }else if (data == "E") {
      ks.sendKey(data);
  }else if (data == "[") {
      ks.sendKey(data);
  }else if (data == "]") {
      ks.sendKey(data);
  }else if (data == "{") {
      ks.sendKey(data);
  }else if (data == "}") {
      ks.sendKey(data);
  }

  else if (data == "Y") {
      historyStepBack();
  }else if (data == "H") {
      historyStepForward();
  }

  // var msg = arrayBufferToString(data);
  // io.emit('chat message', msg);
}


function emit(data) {
    io.emit('chat message', arrayBufferToString(data));
}
function historyStepBack(){
    ks.sendCombination(['control', 'alt', 'z']);
}

function historyStepForward(){
    ks.sendCombination(['control', 'shift', 'z']);
}
