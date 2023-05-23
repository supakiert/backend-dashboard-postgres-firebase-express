const cron = require("node-cron");
const { exec } = require('node:child_process')

cron.schedule("0 3 * * *", function () {
  console.log("---------------------");
  exec('ls -l', (err, output) => {
    // once the command has completed, the callback function is called
    if (err) {
        // log and return if we encounter an error
        console.error("could not execute command: ", err)
        return
    }
    // log the output received from the command
    console.log(output)  
  })
});




// run the `ls` command using exec
exec('sequelize db:seed --seed DalyLog-Sakon_K.js', (err, output) => {
  // once the command has completed, the callback function is called
  if (err) {
      // log and return if we encounter an error
      console.error("could not execute command: ", err)
      return
  }
  // log the output received from the command
  console.log(output)  
})

exec('sequelize db:seed --seed DalyLog-Pimai_D.js', (err, output) => {
  // once the command has completed, the callback function is called
  if (err) {
      // log and return if we encounter an error
      console.error("could not execute command: ", err)
      return
  }
  // log the output received from the command
  console.log(output)  
})
