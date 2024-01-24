require('dotenv').config();
const axios = require('axios');

const botToken = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;
const photoUrl =
  'https://asset.inilahkoran.id/uploads/images/archive/image_750x_5c99c1093a667.jpg';

function sendPhotoAndMessage() {
  axios
    .post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      parse_mode: 'markdown',
      chat_id: chatId,
      text: 'TOBAT BRO, SIKSA NERAKA PEDIH!',
    })
    .then((response) => {
      console.log('Message sent:', response.data.result.text);

      // Kirim foto
      return axios.post(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
        chat_id: chatId,
        photo: photoUrl,
        caption: 'Gambar TOBAT, BRO!',
      });
    })
    .then((response) => {
      console.log('Photo sent:', response.data.result.caption);
    })
    .catch((error) => {
      console.error('Error sending message:', error.message);
    });
}

// Kirim pesan setiap satu detik
setInterval(sendPhotoAndMessage, 1000);
