const axios = require('axios');

const init = async function () {
		const did = (await axios({
				url: 'https://api.totalvoice.com.br/did/',
				method: 'put',
				headers: {
						'Access-Token': '8c0334db4866ab0fdec39bc387f76324'
				},
				data: {
					ura_id: 29034,
					ramal_id: null
				}
		})).data;
		console.log(did);
};

init();
