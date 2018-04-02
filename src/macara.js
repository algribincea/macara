class Macara{
    constructor(model, greutate, lungime){
        this.model = model;
        this.greutate = greutate;
        this.lungime = lungime;
    }
    ridicaContainer(){
        console.log("Macaraua ridica containerul");
    };
    coboaraContainer(){
        console.log("Macaraua coboara containerul");
    };
    miscareBratDoc(){
        console.log("Macaraua se misca spre doc");
    };
    miscareBratVas(){
        console.log("Macaraua se misca spre Vas");
    };
}
let macara = new Macara('Mercedes',10,10);

const tonnes = {
    t1: 9,
    t2: 12,
    t3: 81,
    t4: 13,
    t5: 7
};
// const descarca = function () {
//     return new Promise((resolve, reject) => {
//         if(macara.greutate> tonnes.t1){
//             console.log('Start incarcare container 1');
//             macara.ridicaContainer();
//             macara.miscareBratDoc();
//             macara.coboaraContainer();
//             resolve();
//         }else{
//             reject('No  start');
//         }
//     });
// };
//
// const tanaj1 =  function(){
//     return new Promise((resolve, reject) => {
//         if(macara.greutate> tonnes.t2){
//             console.log('Start incarcare container 2');
//             macara.miscareBratVas();
//             macara.ridicaContainer();
//             macara.miscareBratDoc();
//             macara.coboaraContainer();
//             resolve();
//         }else{
//             reject('No  start');
//         }
//     });
// };
//
// const tonaj2 =  function(){
//     return new Promise((resolve, reject) => {
//         if(macara.greutate> tonnes.t3){
//             console.log('Start incarcare container 3');
//             macara.miscareBratVas();
//             macara.ridicaContainer();
//             macara.miscareBratDoc();
//             macara.coboaraContainer();
//             resolve();
//         }else{
//             reject('No  start');
//         }
//     });
// };
// const tonaj3 =  function(){
//     return new Promise((resolve, reject) => {
//         if(macara.greutate> tonnes.t4){
//             console.log('Start incarcare container 4');
//             macara.miscareBratVas();
//             macara.ridicaContainer();
//             macara.miscareBratDoc();
//             macara.coboaraContainer();
//             resolve();
//         }else{
//             reject('No  start');
//         }
//     });
// };
// const tonaj4 =  function(){
//     return new Promise((resolve, reject) => {
//         if(macara.greutate>tonnes.t5){
//             console.log('Start incarcare container 5');
//             macara.miscareBratVas();
//             macara.ridicaContainer();
//             macara.miscareBratDoc();
//             macara.coboaraContainer();
//             resolve();
//         }else{
//             reject('No  start');
//         }
//     });
// };
//
// descarca()
//     .then()
//     .then(tanaj1)
//     .then(tonaj2)
//     .then(tonaj3)
//     .then(tonaj4)
//     .catch((error) => console.log(error))
// ;
const incarca = function () {
    return new Promise((resolve, reject) => {
        if(macara.greutate> tonnes.t1){
            console.log('Start incarcare container 1');
            macara.ridicaContainer();
            macara.miscareBratVas();
            macara.coboaraContainer();
            resolve();
        }else if (macara.greutate> tonnes.t2){
            tonaj1();
        }else if (macara.greutate> tonnes.t3){
            tonaj2()
        }else if (macara.greutate> tonnes.t4){
            tonaj3()
        }else if (macara.greutate> tonnes.t5){
            tonaj4()
        }
        else{
            reject('No  start');
        }
    });
};

const tonaj1 =  function(){
    return new Promise((resolve, reject) => {
        if(macara.greutate> tonnes.t2){
            console.log('Start incarcare container 2');
            macara.ridicaContainer();
            macara.miscareBratVas();
            macara.coboaraContainer();
            resolve();
        }else if (macara.greutate> tonnes.t3){
            tonaj2()
        }else if (macara.greutate> tonnes.t4){
            tonaj3()
        }else if (macara.greutate> tonnes.t5){
            tonaj4()
        }
        else {
            reject('No  start');
        }
    });
};

const tonaj2 =  function(){
    return new Promise((resolve, reject) => {
        if(macara.greutate> tonnes.t3){
            console.log('Start incarcare container 3');
            macara.ridicaContainer();
            macara.miscareBratVas();
            macara.coboaraContainer();
            resolve();
        }else if (macara.greutate> tonnes.t4){
            tonaj3()
        }else if (macara.greutate> tonnes.t5){
            tonaj4()
        }else {
            reject('No  start');
        }
    });
};
const tonaj3 =  function(){
    return new Promise((resolve, reject) => {
        if(macara.greutate> tonnes.t4){
            console.log('Start incarcare container 4');
            macara.ridicaContainer();
            macara.miscareBratVas();
            macara.coboaraContainer();
            resolve();
        }else if (macara.greutate> tonnes.t5){
            tonaj4()
        }else {
            reject('No  start');
        }
    });
};
const tonaj4 =  function(){
    return new Promise((resolve, reject) => {
        if(macara.greutate>tonnes.t5){
            console.log('Start incarcare container 5');
            macara.ridicaContainer();
            macara.miscareBratVas();
            macara.coboaraContainer();
            resolve();
        }else{
            reject('No  start');
        }
    });
};

incarca()
    .then()
    .then(tonaj1)
    .then(tonaj2)
    .then(tonaj3)
    .then(tonaj4)
    .catch((error) => console.log(error))
;