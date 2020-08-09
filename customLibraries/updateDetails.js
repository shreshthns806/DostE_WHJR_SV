//Create a function  which will update details    
    function updateDetails() {
        console.log("****entered function updateDetails()****")
        database.ref(userIndex).set({
            Name: name,
            Age: age,
            Hobby1: hobby,
            Hobby2: hobby1,
            Hobby3: hobby2,
            Standard: standard,
            Adjective1: adjective,
            Adjective2: adjective1,
            Adjective3: adjective2
        })
    }