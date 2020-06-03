const axios = require('axios');

const init = async function () {
	try {
	const ura = (await axios({
		url: 'https://api.totalvoice.com.br/ura',
		method: 'post',
		headers: {
			'Access-Token': '8c0334db4866ab0fdec39bc387f76324'
			
		},
		data: {
			nome: `URA ${Math.floor(Math.random() * 10000)}`,
			dados: [
				{
					acao: 'tts',
					coletar_dtmf: "6",
					timeout: "20",
					acao_dados: {
						mensagem: 'Olá, seja bem vindo! Digite o código de 6 dígitos que está aparecendo na sua tela!'
					}
				},
				{
					acao: "dinamico",
					acao_dados: {
						url: 'https://530977f577bc.ngrok.io'
					}
				}
			]
		}
	})).data;
	console.log(ura);
} catch (e) {
	console.log(e)
}
};

init();
