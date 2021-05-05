const { db } = require("../models/banco");


function execute(user, msg) {

    let resumo = ''
    let total = 0;

    if (msg === "*") {
        db[user].stage = 0;
        resumo = ''
        total = 0
        return ["Pedido cancelado com sucesso"];
    }

    if (msg === "#") {
        db[user].stage = 3;
        return ["Digite o endereço por favor :"];
    }

    //Aqui gera o código do pedido
    const randomPasswd = len => {
        let passwd = ''
        do{
          passwd += Math.random().toString(10).substr(2)
        }while(passwd.length < len)
        passwd = passwd.substr(0, len)
        return passwd
      }
      //console.log(randomPasswd(4))
      const pegPasswd = randomPasswd(4)


      resumo = ` *PEDIDO:* #${pegPasswd} \n`;
      db[user].itens.forEach((value) => {
          //console.log(resumo + `\n ${value.description} ----------------  ${value.price} \n`);
          resumo += ` \n ${value.description} ---------------- ${value.price} \n`;
  
          total += value.price;
      });

      console.log(resumo, total);
    resumo += "--------------------------------------------\n";
    resumo += ` Total R$ ${total}`;

    return [
        "Para confirmar digite # ou para cancelar digite * ",
        resumo,
    ];
}

exports.execute = execute;