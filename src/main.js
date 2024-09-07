import { RecintosZoo } from './recintos-zoo.js';

class Main {
    static run() {
        const zoo = new RecintosZoo();

       
        console.log("Testando a análise de recintos para 1 crocodilo...");
        let resultado = zoo.analisaRecintos('CROCODILO', 1);
        console.log(resultado.erro ? resultado.erro : resultado.recintosViaveis);

        console.log("\nTestando a análise de recintos para 2 macacos...");
        resultado = zoo.analisaRecintos('MACACO', 2);
        console.log(resultado.erro ? resultado.erro : resultado.recintosViaveis);

        console.log("\nTestando a análise de recintos para 10 macacos...");
        resultado = zoo.analisaRecintos('MACACO', 10);
        console.log(resultado.erro ? resultado.erro : resultado.recintosViaveis);
    }
}


Main.run();