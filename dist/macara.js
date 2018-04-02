"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Macara = function () {
    function Macara(model, greutate, lungime) {
        _classCallCheck(this, Macara);

        this.model = model;
        this.greutate = greutate;
        this.lungime = lungime;
    }

    _createClass(Macara, [{
        key: "ridicaContainer",
        value: function ridicaContainer() {
            console.log("Macaraua ridica containerul");
        }
    }, {
        key: "coboaraContainer",
        value: function coboaraContainer() {
            console.log("Macaraua coboara containerul");
        }
    }, {
        key: "miscareBratDoc",
        value: function miscareBratDoc() {
            console.log("Macaraua se misca spre doc");
        }
    }, {
        key: "miscareBratVas",
        value: function miscareBratVas() {
            console.log("Macaraua se misca spre Vas");
        }
    }]);

    return Macara;
}();

var macara = new Macara('Mercedes', 10, 10);

var tonnes = {
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
var incarca = function incarca() {
    return new Promise(function (resolve, reject) {
        if (macara.greutate > tonnes.t1) {
            console.log('Start incarcare container 1');
            macara.ridicaContainer();
            macara.miscareBratVas();
            macara.coboaraContainer();
            resolve();
        } else if (macara.greutate > tonnes.t2) {
            tonaj1();
        } else if (macara.greutate > tonnes.t3) {
            tonaj2();
        } else if (macara.greutate > tonnes.t4) {
            tonaj3();
        } else if (macara.greutate > tonnes.t5) {
            tonaj4();
        } else {
            reject('No  start');
        }
    });
};

var tonaj1 = function tonaj1() {
    return new Promise(function (resolve, reject) {
        if (macara.greutate > tonnes.t2) {
            console.log('Start incarcare container 2');
            macara.ridicaContainer();
            macara.miscareBratVas();
            macara.coboaraContainer();
            resolve();
        } else if (macara.greutate > tonnes.t3) {
            tonaj2();
        } else if (macara.greutate > tonnes.t4) {
            tonaj3();
        } else if (macara.greutate > tonnes.t5) {
            tonaj4();
        } else {
            reject('No  start');
        }
    });
};

var tonaj2 = function tonaj2() {
    return new Promise(function (resolve, reject) {
        if (macara.greutate > tonnes.t3) {
            console.log('Start incarcare container 3');
            macara.ridicaContainer();
            macara.miscareBratVas();
            macara.coboaraContainer();
            resolve();
        } else if (macara.greutate > tonnes.t4) {
            tonaj3();
        } else if (macara.greutate > tonnes.t5) {
            tonaj4();
        } else {
            reject('No  start');
        }
    });
};
var tonaj3 = function tonaj3() {
    return new Promise(function (resolve, reject) {
        if (macara.greutate > tonnes.t4) {
            console.log('Start incarcare container 4');
            macara.ridicaContainer();
            macara.miscareBratVas();
            macara.coboaraContainer();
            resolve();
        } else if (macara.greutate > tonnes.t5) {
            tonaj4();
        } else {
            reject('No  start');
        }
    });
};
var tonaj4 = function tonaj4() {
    return new Promise(function (resolve, reject) {
        if (macara.greutate > tonnes.t5) {
            console.log('Start incarcare container 5');
            macara.ridicaContainer();
            macara.miscareBratVas();
            macara.coboaraContainer();
            resolve();
        } else {
            reject('No  start');
        }
    });
};

incarca().then().then(tonaj1).then(tonaj2).then(tonaj3).then(tonaj4).catch(function (error) {
    return console.log(error);
});