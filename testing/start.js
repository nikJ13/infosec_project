//start.js
var spawn = require('child_process');
    py    = spawn.spawnSync('python', ['./PythonServer.py']);
    // data = [1,2,3,4,5,6,7,8,9],
//console.log(py);
   //console.log('Sum of numbers=',py.pid);
   var outputs1 = py.output.stdout;
   //var outputs2 = py.stderr;
   console.log(`${outputs1}`);
   // console.log(`${py.stdout[1]}`);
   //console.log('stdut  of numbers=',py.stdout);


// py.stdout.on('data', function(data2){
  // console.log(`${data2}`);
  // console.log('Sum of numbers=',dataString);
// });
// py.stdout.on('end', function(){
  // console.log('Sum of numbers=',dataString);
// });
// py.stdin.write(JSON.stringify(data));
// py.stdin.end();