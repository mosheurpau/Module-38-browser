function doSomeThing() {
    console.log('I am coding javaScript.');
}
console.log('frist: ami sober age');
console.log('Second: I am the second person');
// setTimeout(doSomeThing, 5000);
setTimeout(function () {
    console.log('I am using VS code');
}, 6000);
setTimeout(() => {
    console.log('Exploring MDN article');
}, 4000);

console.log('Fourth: This is fourth');