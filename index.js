function foo(age, marrid) {
    let result;
    if (age <= 20) {
        result = 50000;
    } else if (age >= 21 && age <= 60 && marrid === 'uylangan') {
        result = 100000;
    } else if(age >= 21 && age <= 60 && marrid==='uylanmagan') {
        result = 200000
    }else {
        result = 'FREE'
    }
    return result;
}
console.log(foo(15, "married"));
