//Create a function which will read index value from database and store it into a variable called index.
    function getIndex(){
        console.log("****entered function getIndex()****")
        var getIndexRef = database.ref('index');
        getIndexRef.on("value",function(data){
            index = data.val();
            console.log("read value of index from db in getIndex()****")
        })
    }
