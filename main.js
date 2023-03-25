 const url ='https://jsonplaceholder.typicode.com/todos/1';

// XMLHttpRequest

// const xhr = new XMLHttpRequest();
// xhr.open('GET',url);
// xhr.onload =()=>{
//     console.log(xhr.response)
// };
// xhr.send()




//fetch

//  fetch(url).then(data=>{
//     return data.json()
//  })
//.then(data=>{
//     console.log(data)
//  })



// async/await

// async function request(){
//     const res =await fetch(url)
//     console.log(res)
// }
// request()


// + promise chain

// function request(url) {  
//     let promise = new Promise((resolve, reject) => {
//       const req = new XMLHttpRequest();
      
//       req.open('GET', url);
      
//       req.onload = function() {
        
//         if (req.status === 200) {
//           resolve(JSON.parse(req.response))
//         } else {
//           reject(Error(req.status));
//         }
//       }
    
//       req.send();
//     });
    
//     return promise;
//   }

//   request()