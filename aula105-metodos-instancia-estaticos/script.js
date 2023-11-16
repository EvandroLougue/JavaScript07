class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    aumentaVolume() {
        this.volume += 2;
    }
    diminuiVolume() {
        this.volume -= 2;
    }
    /////// estático
    static soma(x, y) {
        return x + y ;
    }
}


const controle1 = new ControleRemoto('Sony');
controle1.aumentaVolume();
console.log(controle1);
controle1.aumentaVolume();
controle1.aumentaVolume();
controle1.aumentaVolume();
controle1.aumentaVolume();
controle1.aumentaVolume();
controle1.aumentaVolume();
console.log(controle1);

console.log(ControleRemoto.soma(5, 2));