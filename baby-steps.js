length = process.argv.length;
ans = 0;
for (i = 2; i < length; i++) {
  ans += Number(process.argv[i]);
}
console.log(ans);
