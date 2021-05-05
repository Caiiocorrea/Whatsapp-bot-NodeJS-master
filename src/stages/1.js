const { menu1 } = require("../menu/menu1");
const { db } = require("../models/banco");


const api = require("../api");

function execute(user, msg) {
    if (msg === "1") {
        db[user].stage = 0;
        return [`Escolha o tamanho do açaí \n\n 1️⃣ - 300ML - Natural \n 2️⃣ - 500ML - Natural \n 3️⃣ - 700ML - Natural \n 4️⃣ - 300ML - Xarope de Guaraná \n 5️⃣ - 500ML - Xarope de Guaraná \n 6️⃣ - 700ML - Xarope de Guaraná \n`, 
        "```Digite # para finalizar ou * para cancelar```",];
    }

    if (msg === "2") async () => {
        //db[user].stage = 2;

            //Aqui gera o código do pedido
            const randomPasswd = len => {
              do{
                 passwd += Math.random().toString(10).substr(2) 
              }while(passwd.length < len)
                 passwd = passwd.substr(0, len)
              return passwd       
            }
                        //console.log(randomPasswd(4))
                        const pegPasswd = randomPasswd(4)
            
            //console.log(`- PEDIDO: #${pegPasswd}`)
            salvaPedido = pegPasswd

                    const response = await api()
                    //console.log(response.data)
                    var dados = response.data
                    //console.log(dados)

                    let pegaDados = ''
        
                    dados.forEach(dados => {
                        pegaDados += `\n\n ID: ${dados.acaiId} \n Pedido: ${ dados.acaiPedido} \n Detalhes: ${ dados.acaiDescricao} \n Valor: ${ dados.acaiValor}`
                    });
                    return [`\nEventos em Regência Augusta \n\n` + pegaDados];

    }


    if (msg === "3") {
        db[user].stage = 2;
        return ["Estamos fechando seu pedido, ok?"];
    }

    if (msg === "*") {
        db[user].stage = 0;
        return ["Pedido cancelado com sucesso"];
    }

    if (msg === "#") {
        db[user].stage = 2;
        return ["Estamos fechando seu pedido, ok?"];
    }

    if (!menu1[msg]) {
        return [
            "Código inválido, digite corretamente",
            "```Digite # para finalizar ou * para cancelar```",
        ];
    }

    db[user].itens.push(menu1[msg]);

    return [
        "```Digite # para finalizar ou * para cancelar```",
        `Item(${menu1[msg].solicitacao}) adiconado com sucesso`,
        `\nEventos em Regência Augusta \n\n(${pegaDados})`,
    ];
}

exports.execute = execute;