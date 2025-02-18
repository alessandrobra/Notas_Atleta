document.addEventListener("DOMContentLoaded", () => {
    let atletas = [
        { nome: "Cesar Abascal", notas: [10, 9.34, 8.42, 10, 7.88] },
        { nome: "Fernando Puntel", notas: [8, 10, 10, 7, 9.33] },
        { nome: "Daiane Jelinsky", notas: [7, 10, 9.5, 9.5, 8] },
        { nome: "Bruno Castro", notas: [10, 10, 10, 9, 9.5] }
    ];

    function calcularMedia(notas) {
        let notasOrdenadas = notas.sort((a, b) => a - b);
        let notasComputadas = notasOrdenadas.slice(1, 4);
        let soma = notasComputadas.reduce((total, nota) => total + nota, 0);
        return soma / notasComputadas.length;
    }

    let output = document.getElementById("output");
    atletas.forEach(atleta => {
        let media = calcularMedia(atleta.notas).toFixed(6);
        output.innerHTML += `
            <div class="atleta">
                <h3>Atleta: ${atleta.nome}</h3>
                <p>Notas Obtidas: ${atleta.notas.join(", ")}</p>
                <p><strong>Média Válida:</strong> ${media}</p>
            </div>
        `;
    });
});
