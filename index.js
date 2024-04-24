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
    bot.sendMessage(chatId, 'Welcome to the bot!');
  }
});

const PORT = process.env.PORT || 8000;

app.listen({ port: process.env.PORT }, () =>
  console.log(`Server ready at http://localhost:${process.env.PORT}`)
);
