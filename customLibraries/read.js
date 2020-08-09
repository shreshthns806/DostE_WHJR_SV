async function read(){
    console.log("****entered function read()****")
    await database.ref('users').on("value",function(data){
        allUsers = data.val();
        console.log("****read data of allUsers in read()****")
    })
}