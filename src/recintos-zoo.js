class RecintosZoo {
    constructor() {
        this.recintos = [
            { numero: 1, bioma: 'savana', tamanhoTotal: 10, animaisExistentes: [{ especie: 'MACACO', quantidade: 3 }] },
            { numero: 2, bioma: 'floresta', tamanhoTotal: 5, animaisExistentes: [] },
            { numero: 3, bioma: 'savana e rio', tamanhoTotal: 7, animaisExistentes: [{ especie: 'GAZELA', quantidade: 1 }] },
            { numero: 4, bioma: 'rio', tamanhoTotal: 8, animaisExistentes: [] },
            { numero: 5, bioma: 'savana', tamanhoTotal: 9, animaisExistentes: [{ especie: 'LEAO', quantidade: 1 }] }
        ];

        this.animaisPermitidos = {
            'LEAO': { tamanho: 3, bioma: ['savana'] },
            'LEOPARDO': { tamanho: 2, bioma: ['savana'] },
            'CROCODILO': { tamanho: 3, bioma: ['rio'] },
            'MACACO': { tamanho: 1, bioma: ['savana', 'floresta'] },
            'GAZELA': { tamanho: 2, bioma: ['savana'] },
            'HIPOPOTAMO': { tamanho: 4, bioma: ['savana e rio'] }
        };
    }

    analisaRecintos(animal, quantidade) {// Validações de animal e quantidade
        if (!this.animaisPermitidos[animal]) {
            return { erro: "Animal inválido", recintosViaveis: false };
        }

        if (quantidade <= 0) {
            return { erro: "Quantidade inválida", recintosViaveis: false };
        }

        const biomasPermitidos = this.animaisPermitidos[animal].bioma;
        const tamanhoAnimal = this.animaisPermitidos[animal].tamanho;

        // Filtra os recintos viáveis
        const recintosViaveis = this.recintos.filter(recinto => {
            const espacoLivre = recinto.tamanhoTotal - recinto.animaisExistentes.reduce((acc, animal) => acc + (animal.quantidade * this.animaisPermitidos[animal.especie].tamanho), 0);
            const biomaPermitido = biomasPermitidos.includes(recinto.bioma);
            return espacoLivre >= (quantidade * tamanhoAnimal) && biomaPermitido;
        });

        if (recintosViaveis.length === 0) {
            return { erro: "Não há recinto viável", recintosViaveis: false };
        }

        return {
            erro: null,
            recintosViaveis: recintosViaveis.map(recinto => `Recinto ${recinto.numero} (espaço livre: ${recinto.tamanhoTotal} total: ${recinto.tamanhoTotal})`)
        };
    }
}
   
export { RecintosZoo as RecintosZoo };
