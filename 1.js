let L = 0, R = 0;
let s = "salam ali jaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaan";
let z = "ali";
let n = s.length;
for (let i = 1; i < n; i++) 
{
    if (i > R) {
        L = R = i;
        while (R < n && s[R-L] == s[R]) {
            R ++;
        }
        z[i] = R - L; 
        R --;
    } 
    else {
        let k = i-L;
        if (z[k] < R - i + 1) {
            z[i] = z[k];
        } 
        else {
            L = i;
            while (R < n && s[R - L] == s[R]){
                R ++;
            }
            z[i] = R - L; 
            R --;
        }
    }
}