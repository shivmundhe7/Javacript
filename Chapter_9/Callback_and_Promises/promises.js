console.log('This is Promises');    

let prom1 = new Promise((resolve , reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("No Random Number was not supporting you")
    }
    else{
        setTimeout(()=>{
        console.log("Yes Iam Done")
        resolve()
    }, 3000);
    }

})

prom1.then((a)=>{
    console.log(a)
})