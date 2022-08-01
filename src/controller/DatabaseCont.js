var Connection = require('tedious').Connection;


var config = {
  userName: 'sa', 
  password: 'akr123',
  server: 'localhost', 
  options: {
      database: 'Electric' 
  }
}



var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err) {
    if (err) {
        console.log(err)
    }
    else{
        insertIntoDatabase()
    }
});


function insertIntoDatabase(){

    console.log("Inserting a new object into database...");

    request = new Request(
        "INSERT INTO KFTRNImage (Site_Id, Dispenser_Id, Slip_No, Car_No)  VALUES ('SPBKB 10.2.1.001', 1, 440, 'AD20T', '2022-07-20 10:10:38.0')",
        function(err, rowCount, rows) {
            console.log(rowCount + ' row(s) inserted');
    });

    request.on('doneProc', function(){
      console.log("Insert is done...");
      process.exit(1);
    })

    connection.execSql(request);
}