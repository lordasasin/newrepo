let n = 5;

for (let i = 0; i < n; i++) {
  let spaces = " ".repeat(n - i - 1);
  let stars = "*".repeat(2 * i + 1);
  console.log(spaces + stars);
}