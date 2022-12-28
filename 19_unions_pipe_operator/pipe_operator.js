// narrowing
function fun(id) {
    console.log(id);
    if (typeof id == 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
fun("harshit");
