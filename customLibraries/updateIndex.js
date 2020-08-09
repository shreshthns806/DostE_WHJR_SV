//Create a function which will update the value of index in the database.
    function updateIndex(){
        console.log("****entered function updateIndex()****")
        database.ref('/').update({
            index: index
        })
    }