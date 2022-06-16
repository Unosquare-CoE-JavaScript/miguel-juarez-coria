const { taskOne, taskTwo } = require('./tasks');

async function main() {

    try {
        console.time('Measuring time');
        const valOne = await taskOne();
        const valTwo = await taskTwo();
        console.timeEnd('Measuring time');

        console.log('Task One returned: ', valOne);
        console.log('Task Two returned: ', valTwo);
    }catch(e){
        console.log(e);
    }
}
main();