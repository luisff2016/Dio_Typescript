function soma (a:number, b:number){
    return a + b;
}
console.log('TypeScript!');
soma( 10, 20)

//types
//interfaces
interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquatico';
}

const animal: IAnimal = {
    nome: 'camelo',
    tipo: "terrestre" 
}
