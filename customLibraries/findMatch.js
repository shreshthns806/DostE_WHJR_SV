//Create a function which will find the match for user
    function findMatch(){
        console.log("****entered findMatch()****") 
        var usr = "user"+index;
        for(var x in allUsers){
            console.log("****entered for loop with x variable in findMatch()****")
            var user1 = allUsers[usr];
            if(x!==usr){
                console.log("****entered if which checks that user not matched with himself in findMatch()****")
                var u=allUsers[x];
                if(u.Age == user1.Age || u.Age == user1.Age-1 || u.Age == user1.Age+1){
                    console.log("****entered if to check age match in findMatch()****")
                    ageM = true;
                }
                if(u.Adjective1 == user1.Adjective1||u.Adjective1 == user1.Adjective2||u.Adjective1 == user1.Adjective3){
                    console.log("****entered if to check adj1 match in findMatch()****")
                    adjC++;
                }
                if(u.Adjective2 == user1.Adjective1||u.Adjective2 == user1.Adjective2||u.Adjective2 == user1.Adjective3){
                    console.log("****entered if to check adj2 match in findMatch()****")
                    adjC++;
                }
                if(u.Adjective3 == user1.Adjective1||u.Adjective3 == user1.Adjective2||u.Adjective3 == user1.Adjective3){
                    console.log("****entered if to check adj3 match in findMatch()****")
                    adjC++;
                }
                if(u.Hobby1 == user1.Hobby1||u.Hobby1 == user1.Hobby2||u.Hobby1 == user1.Hobby3){
                    console.log("****entered if to check hobby1 match in findMatch()****")
                    hobbyC++;
                }
                if(u.Hobby2 == user1.Hobby1||u.Hobby2 == user1.Hobby2||u.Hobby2 == user1.Hobby3){
                    console.log("****entered if to check hobby2 match in findMatch()****")
                    hobbyC++;
                }
                if(u.Hobby3 == user1.Hobby1||u.Hobby3 == user1.Hobby2||u.Hobby3 == user1.Hobby3){
                    console.log("****entered if to check hobby3 match in findMatch()****")
                    hobbyC++;
                }
                if(ageM && ((adjC==2 && hobbyC>=2)||(adjC>1 && hobbyC==2) || (adjC>1 && hobbyC>=2))){
                    console.log("****entered if to check if user matched in findMatch()****")
                    matched = true;
                    matchA.push(u.Name);
                    matchA.push(u.Age)
                    matchA.push(u.Hobby1)
                    matchA.push(u.Hobby2)
                    matchA.push(u.Hobby3)
                    matchA.push(u.Standard)
                    matchA.push(u.Adjective1)
                    matchA.push(u.Adjective2)
                    matchA.push(u.Adjective3)
                }
                adjC=0;
                hobbyC=0;
                matched = false;
                ageM= false;
            }
        }
    }