fetch("www.ytac.com")
// default method of the fecth is get 


// what if yu want to use the post method
const response =  await fetch("https://api.example.com/data" , {
    method : post , 
    headers : {
        'Content-Type' : 'application/json'
    },
    body : JSON.stringify({name : 'John' , age : 30})
});


// patch 
const response2 =  await fetch("https://api.example.com/data" , {
    method : patch , 
    headers : {
        'Content-Type' : 'application/json'
    },
    body : JSON.stringify({name : 'John' , age : 30})
});