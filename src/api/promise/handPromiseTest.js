const Promise = require('./handPromise')

console.log('1')
new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('timer')
        resolve(1)
    })
   
}).then(
    value => { 
        console.log('4')
        console.log('value',value)},
    reason => { console.log('reason',reason) }
)
console.log('3')