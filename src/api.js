const axios = require('axios')

const api = async () => {
    try {
        return await axios.get("http://192.168.0.11:8080/api/v1/pedidos", { setTimeout: 3000 })
    } catch(error) {
        return error
    }
}

module.exports = api