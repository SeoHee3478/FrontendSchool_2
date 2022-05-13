// pending
// pulfilled 
// rejected

function sayHello() {
    return new Promise((resolve, reject) => {
        //const hello = "hello hello";
        //resolve(hello); //성공적으로 반환: resolve에 hello 상수값 반환
        // reject(new Error());
        resolve("hello!");
    });
}

// sayHello()
//     .then((resolvedData) => {
//         console.log(resolvedData); //hello 값이 넘어가서 console.log 실행, then을 통해서 일련의 문법을 가져올수 있음
//         return resolvedData;
//     }).then((resolvedData) => {
//         console.log(resolvedData);
//         return resolvedData;
//     }).then((resolvedData) => {
//         console.log(resolvedData);
//     }) //then을 써서 callback이 많이 만들어지는 것을 방지했음
//     .catch((error) => {
//         console.log(error);
//     });

async function test() {
    const hello1 = await sayHello(); //이게 끝나고 난 다음에 밑에 코드를 실행하겠다.
    //await을 사용하기 위해서 async를 사용해줘야함
    console.log(hello1);
}
test();