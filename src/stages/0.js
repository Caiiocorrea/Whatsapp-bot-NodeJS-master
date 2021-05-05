const { menu1 } = require("../menu/menu1");
const { db } = require("../models/banco");

function execute(user, msg, contato) {

    // Obtem a hora atual do PC para definir se vai ser Bom dia, tarde ou noite.
    stamp = new Date();
    hours = stamp.getHours();
    if (hours >= 18 && hours < 24) {
        time = "Boa noite"
    } else if (hours >= 12 && hours < 18) {
        time = "Boa tarde"
    } else if (hours >= 0 && hours < 12) {
        time = "Bom dia"
    }


   //let menu = " CARDAPIO \n\n";
   let menu = "";

    Object.keys(menu1).forEach((value) => {
        let element = menu1[value];
        menu += `${value} - ${element.solicitacao} \n`;
    });

    db[user].stage = 1;

    return [
        menu,
        `${time}, ${contato}, sou a assistente virtual da Açai House, irei apresentar o carpádio e ajudar com o status do seu pedido. Para fazer o pedido basta enviar o códgio *Iniciar Pedido* e siga as etapas, para verificar o status basta enviar a palavra pedido + código (ex: Pedido 0001)`,
    ];
}

exports.execute = execute;