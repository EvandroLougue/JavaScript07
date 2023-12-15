function maiorValor(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}
const maior = (n1, n2) => n1 > n2 ? n1 : n2;






const n1 = (Math.random() * 1000).toFixed(0);
const n2 = (Math.random() * 1000).toFixed(0);

console.log(n1, n2);

console.log(maiorValor(n1, n2));
console.log(maior(n1, n2));