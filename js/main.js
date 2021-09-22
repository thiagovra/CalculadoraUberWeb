var botao = document.querySelector("#adicionar-dia")

botao.addEventListener("click", (event) => {
    event.preventDefault()
    var form = document.querySelector("#form-adiciona")
    var user = getFormUser(form)
    var despesas = despesasOperacionais(user)
    user.resultado = (user.faturamento - despesas.despesaCombustivel).toFixed(2)
    addUserNaTabela(user)    
    form.reset()
})

function addUserNaTabela(objeto) {
    document.querySelector("#tabela-usuario").appendChild(criarTr(objeto))    
}

function getFormUser(form) {

    var usuario = {

        dia: form.dia.value,
        kmantes: form.kmantes.value,
        kmdepois: form.kmdepois.value,
        preco: form.preco.value,
        media: form.media.value,
        faturamento: form.faturamento.value,

        resultado: 0,
    }
    return usuario;
}

function despesasOperacionais(object) {

    var despesasOperacionais = {

        kmPercorridos: object.kmdepois - object.kmantes,
        litrosDeCombustivelUsados: (object.kmdepois - object.kmantes) / object.media,
        despesaCombustivel: ((object.kmdepois - object.kmantes) / object.media) * object.preco,
        }
    return despesasOperacionais
}

function criarTr(objeto) {

    var nomeTr = document.createElement("tr")
    nomeTr.classList.add("usuario")

    // Cria a td com classe e dados do objeto
    nomeTr.appendChild(CriarTd("info-dia", objeto.dia))
    nomeTr.appendChild(CriarTd("info-kmantes", objeto.kmantes))
    nomeTr.appendChild(CriarTd("info-kmdepois", objeto.kmdepois))
    nomeTr.appendChild(CriarTd("info-preco", objeto.preco))
    nomeTr.appendChild(CriarTd("info-media", objeto.media))
    nomeTr.appendChild(CriarTd("info-faturamento", objeto.faturamento))
    nomeTr.appendChild(CriarTd("info-resultado", objeto.resultado))
    nomeTr.appendChild(criarBotaoTd("bot-del", "buttondel", "botao-Delete", "Deletar"))

    return nomeTr
    
}

function CriarTd(classeDoObjeto, propriedadeDoObjeto) {
    
    var tdNew = document.createElement("td")
    tdNew.classList.add(classeDoObjeto)
    tdNew.textContent = propriedadeDoObjeto

    return tdNew
}

function criarBotaoTd(classedaTdDoBotao, nomeDoBotao, classeDoBotao, botaoTextContent) {

    var newTd = document.createElement("td")
    newTd.classList.add(classedaTdDoBotao)
    var newBotao = document.createElement(nomeDoBotao)
    newBotao.classList.add(classeDoBotao)
    newBotao.textContent = botaoTextContent
    newTd.appendChild(newBotao)

    return newTd
}