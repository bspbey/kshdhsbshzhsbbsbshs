const Discord = require("discord.js-selfbot-v11"); // Discord.js patched 4 selfbots
const chalk = require("chalk"); // Color
const keepAlive = require("./server");
require("dotenv").config(); // .env
const client = new Discord.Client({
  ws: { properties: { $browser: "Discord iOS" } },
}); // yes.

client.on("ready", () => {
  console.clear();
  console.log(chalk.magentaBright`Mobile Status Applied to ${client.user.tag}`);
});
keepAlive();
client.login(process.env.TOKEN);
