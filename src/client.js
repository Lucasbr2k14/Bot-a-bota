const {token} = require("../config.json")
const discord = require("discord.js")
const bot = new discord.Client({intents: 32767})
bot.login(token)

module.exports = {
    bot:bot
}