let pro = new Promise((resolve,reject) => {
    console.log("this is the executor function");
    let a = 5+2;
    
    //checking if the result is right
    if(a == 7){
        resolve("Successfull!");
    }
    else{
        reject("Failed");

    }
});
pro.then((message)=>{console.log("this promise was "+message)
}).catch((message)=>{console.log("this promise "+message)
}).finally(()=>{console.log("The finally block executed ")});

let urls = [
    'https://api.github.com/users/ketkic09',
    'https://api.github.com/users/virajdalvi',
    'https://api.github.com/users/Shreyika'
];

let requests = urls.map(url => fetch(url));
console.log("requests",requests[0]);
Promise.all(requests).then(responses => responses.forEach(
    response => console.log(`${response.url}: ${response.status}`)
  ));




