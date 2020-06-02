const axios = require('axios');

const init = async function() {
  await axios({
    url: 'https://api.totalvoice.com.br/ura',
    method: 'post', 
    headers: {
      'Access-Token': process.env.TOTALVOICE_API_KEY
    },
    data: {
      nome: `URA ${Math.floor(Math.random() * 10000)}`,
      dados: [
        {
          acao: 'tts',
          coletar_dtmf: "6",
          timeout: "20",
          acao_dados: {
            messagem: 'Olá, seja bem-vindo ao sistema Developer William! Digite o código de 6 dígitos que aparecendo na sua tela'
          }
        },
        {
          acao: "dinamico",
          acao_dados: {
            url: ''
          }
        }
      ]
    }
  });
};

init();