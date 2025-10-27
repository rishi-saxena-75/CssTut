console.log('hello')

// callbaccks , event queue , event loop
/* function fetchData(callback){
    setTimeout(() => {
        let data = 'fetched data'
        callback(data , null);
    }, 5000);
}

function handleData(data , error){
    if(error){
        console.log('error');
    } else {
        console.log(data);
    }
}
fetchData(handleData); */

// problems - callback hell , pyramid of doom
/* asyncOperation1(arg1 , (result1) => {
    asyncOperation2(result1 , (result2) =>{
        asyncOperation3(result2 , (result3) => {
            // and so on more and more nested loops
        });
    });
});
*/
//promises --object handling the hell problems
// it has 3 stattes -pending, fulfilled , rejected

/* function getData(){

    return new Promise((resolve , reject) => {

        setTimeout(() => {
            resolve('data fetched');
        }, 5000);
    })
}
    getData()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    }) */

//async funtion
function getData(){

    return new Promise((resolve , reject) => {

        setTimeout(() => {
            resolve('data fetched');
        }, 5000);
    })
}
async function fetchData() {
    try {
        const result = await getData();
        console.log(result);
    } catch(error){
        console.error(error);

    }
}

fetchData();