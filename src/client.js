require("dotenv").config()


const discord = require("discord.js")
const bot = new discord.Client({intents: 32767})
bot.login(process.env.TOKEN)

module.exports = {
    bot:bot
}