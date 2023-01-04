const { exec } = require('child_process');
const TelegramBot = require('node-telegram-bot-api');

const token = '5660136492:AAFMS1ryyxpAnT0stftLVt7xyOi8-bbIXyQ';
const chatId = '-1001838003812';

const bot = new TelegramBot(token, {polling: true});

function getUsage() {
  return new Promise((resolve, reject) => {
    exec('top -bn1', (error, stdout) => {
      if (error) {
        reject(error);
      } else {
        const lines = stdout.split('\n');
        const cpuLine = lines[2];
        const cpuUsage = cpuLine.match(/\d+\.\d+/); 
        exec('free -m', (error, stdout) => {
          if (error) {
            reject(error);
          } else {
            const lines = stdout.split('\n');
            const ramLine = lines[1];
            const ramUsage = ramLine.split(/\s+/)[2]; 
            const ramFree = ramLine.split(/\s+/)[3]; 
            resolve({
              cpu: cpuUsage[0],
              ram: {
                used: ramUsage,
                free: ramFree
              }
            });
          }
        });
      }
    });
  });
}

setInterval(() => {
  getUsage().then((usage) => {
    const message = `Penggunaan CPU saat ini: ${usage.cpu}%\nPenggunaan RAM saat ini: ${usage.ram.used} MB\nRAM yang tersedia: ${usage.ram.free} MB`;
    bot.sendMessage(chatId, message);
  });
}, 75000); 
