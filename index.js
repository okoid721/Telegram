const express = require('express');
require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });
const app = express();

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === '/start') {
    bot.sendMessage(chatId, 'Welcome to the CRYPTO WORLD!');
  }
  if (messageText === '/help') {
    bot.sendMessage(chatId, 'what can i help you with');
  }
  if (messageText === 'group') {
    bot.sendMessage(chatId, 'Join The Telegarm Group For More Info');
  }
});

const PORT = process.env.PORT || 8000;

app.listen({ port: process.env.PORT }, () =>
  console.log(`Server ready at http://localhost:${process.env.PORT}`)
);
