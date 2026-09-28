const produtos = [

    {
        nome: "Sapateira de porta Organizadora para Sapatos.",
        preco: "R$ 19,98",
        imagem: "imagem/Sapateira.png",
        link: "https://s.shopee.com.br/9zy2lWiSGk"
    },


];

const container = document.getElementById("produtos");

produtos.forEach((produto) => {

    const card = document.createElement("div");

    card.classList.add("produto");

    card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">

        <h2>${produto.nome}</h2>

        <p class="preco">${produto.preco}</p>

        <a href="${produto.link}" target="_blank" class="botao">
            🛒 Ver produto
        </a>
    `;

    container.appendChild(card);
});