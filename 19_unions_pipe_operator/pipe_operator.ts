type Id = number | String; // can be number or string (also called as unions)

// narrowing
function fun(id:Id) {
    
    console.log(id);

    if(typeof id == 'string' ){
        console.log(id.toUpperCase());
    }else{
        console.log(id);
    }

}

fun("harshit");