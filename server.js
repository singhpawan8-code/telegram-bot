const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const TOKEN = process.env.BOT_TOKEN;

if (!TOKEN) {
  console.error("BOT_TOKEN environment variable is missing");
} else {
  const bot = new TelegramBot(TOKEN, { polling: true });

  bot.on("message", (msg) => {
    if (!msg.text) return;

    bot.sendMessage(msg.chat.id, `You said: ${msg.text}`);
  });
}

app.get("/", (req, res) => {
  res.send("Telegram bot server is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
