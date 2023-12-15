function FizzBuzz(numero) {
    
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return `Fizz`;
    if (numero % 5 === 0) return `Buzz`;
    if (numero % 5 !== 0 && numero % 3 !== 0) return numero;
}

for (let i = 0; i <= 100; i++) {
    console.log(FizzBuzz(i));
}

