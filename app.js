
const promise1 =  Promise.resolve('hello world ');
const promise2 = Promise.resolve(10);
const promise3 = 10;
const promise4 = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        console.log('this is set timeout')
        resolve('sucsess')
    },2000);
})
const promise5 = fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
    console.log(res);
})



Promise.all([promise1,promise2,promise3.promise4]).then((values)=>{
    console.log("promise all is done", values);
})