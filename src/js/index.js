const listaSelecaoFighters = document.querySelectorAll(".fighter")

listaSelecaoFighters.forEach(fighter =>{
    fighter.addEventListener("click", () => {
        const cartaoFighterAberto = document.querySelector(".aberto");
        cartaoFighterAberto.classList.remove("aberto");

        const idFighterSelecionado = fighter.attributes.id.value;
        const idDoCartaoFighterParaAbrir = "cartao-" + idFighterSelecionado;
        const cartaoFighterParaAbrir = document.getElementById(idDoCartaoFighterParaAbrir);
        cartaoFighterParaAbrir.classList.add("aberto");

        const fighterAtivoNaListagem = document.querySelector(".ativo");
        fighterAtivoNaListagem.classList.remove("ativo");

        const fighterSelecionadoNaListagem = document.getElementById(idFighterSelecionado);
        fighterSelecionadoNaListagem.classList.add("ativo");
    })
})