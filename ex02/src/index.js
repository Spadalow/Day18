let fifteenArray = [];
function* myGenerator(){
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
    
}
function* insideGenerator1(){
    let x = 0;
    for(let i = 1; i <= 5; i++){
        x = i;
        yield x;
    }
}
function* insideGenerator2(){
    let x = 0;
    for(let i = 10; i <= 15; i++){
        x = i;
        yield x;
    }
}
function* insideGenerator3(){
    let x = 0;
    for(let i = 6; i <= 9; i++){
        x = i;
        yield x;
    }
}

var iterator = myGenerator();

for(let i = 0; i < 16; i++){
 fifteenArray.push(`${iterator.next().value}#`);
}
console.log(fifteenArray);

module.exports = {fifteenArray, myGenerator};