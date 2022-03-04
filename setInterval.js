console.log('frist');
// setInterval(() => {
//     console.log('tik tik tik');
// }, 1000)

let second = 0;
const timeId = setInterval(() => {
    // second += 1;
    // console.log(second++);
    console.log(++second);
    if (second > 15) {
        clearInterval(timeId);
    }
}, 500)
