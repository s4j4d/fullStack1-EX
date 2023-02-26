function solve(b, operator){
    while (b.includes(operator)){
        for (let i = 1; i < b.length; i += 2){
            if (b[i] == operator){
                let n1 = parseFloat(b[i - 1]);
                let n2 = parseFloat(b[i + 1]);

                let ans;
                if (operator == '*') ans = n1 * n2;
                if (operator == '/') ans = n1 / n2;
                if (operator == '+') ans = n1 + n2;
                if (operator == '-') ans = n1 - n2;
                    

                let restOfArr = b.slice(i + 2,);

                let len = b.length;

                b.splice(i + 2, len - (i + 2));
                b.pop();
                b.pop();
                b.pop();

                b.push(ans);
                b = b.concat(restOfArr);
            }
        }
    }
    return b;  
}
function calc(expr){
    let Ex = expr.split(' ');
    Ex = solve(Ex, '*');
    Ex = solve(Ex, '/');
    Ex = solve(Ex, '+');
    Ex = solve(Ex, '-');
    return Ex;
}
let a = "1 + 5 * 3 - 7 * 8";
console.log(calc(a)[0]);