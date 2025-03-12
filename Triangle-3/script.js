let n = 6;
for (let i = 1; i <= n; i++) {
    let str = "* ";
    let space  = '  ';
    document.write(space.repeat((n-i))+str.repeat(i));
    document.write("<br>")
}
