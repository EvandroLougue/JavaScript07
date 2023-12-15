const ePaisagem = (larg, alt) => larg > alt ? 'Paisagem' : 'Retrato';

larg = Math.floor(Math.random() * 1000);
alt = Math.floor(Math.random() * 1000);

console.log('Largura', larg,'px', 'Altura', alt ,'px' )
console.log(ePaisagem(larg, alt));