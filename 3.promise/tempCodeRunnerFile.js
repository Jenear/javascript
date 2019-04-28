

function after(times, callback) {
    return function() {
        if (--times === 0) {
            callback()
        }
    }
}
let eat = after(3, function() {
    console.log('eat over')
})
eat();
eat();
eat();