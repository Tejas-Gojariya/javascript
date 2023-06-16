// for 

for (let i = 0; i <=10; i++) {
    const element = i;
    if(element == 5 ){
        console.log("5 is best number");
    }
    console.log(element)
}


for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value:${i}`)
    for (let t = 0; t <=10; t++) {
console.log(`inner loop value ${t} and inner loop ${i}`);        
    }
    
}


// break

for (let index = 1; index <= 20; index++) {
if (index == 5 ) {
    // console.log(`detected 5`);
    break
    
}    
console.log(`value of i is ${index}`);
}


// continue

for (let index = 1; index <= 20; index++) {
    if (index == 5 ) {
        console.log(`detected 5`);
        continue
        
    }    
    console.log(`value of i is ${index}`);
    }

    // while loop

    let index = 0 
    while (index <= 10) {
        console.log(`value of index is ${index}`)
        index = index + 2
    }


    // do while 

    let score = 1

    do {
        console.log(`score is ${score}`);
        score++
    } while (score<=10);