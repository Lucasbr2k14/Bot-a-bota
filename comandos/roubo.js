const axios = require("axios").default

module.exports = {
    async run(msg){
        const req = await axios.get("http://localhost:8080")
        msg.channel.send("```\n" + "Nós ja fomos roubados pelo governo brasileiro " + req.data + " R$" + " Até a data de hoje!" + "```")
    },
    description: "Mostrar o quanto o povo brasileiro foi roubado pelo o governo",
    exemple: "roubo"
}