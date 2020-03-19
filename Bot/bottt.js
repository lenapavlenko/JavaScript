process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api');

const token = '1114139723:AAGk54c_KsMUZR3K8ymyez7DuL1Y5DTuAYQ';

const bot = new TelegramBot(token, {polling: true});


bot.onText(/\/start/, (msg, match) => {
    var message =  'Hello '
    bot.sendMessage(msg.chat.id, message);
});

  bot.getMe().then(function(me)
{
    console.log('Hello! My name is %s!', me.first_name);
    console.log('My id is %s.', me.id);
    console.log('And my username is @%s.', me.username);
});
 
bot.on('text', function(msg)
{
    var messageChatId = msg.chat.id;
    var messageText = msg.text;
 
    if (messageText === '/keys') {
        var opts = {
            reply_to_message_id: msg.message_id,
            reply_markup: JSON.stringify({
                keyboard: [
                    ['Yes'],
                    ['No']
                ]
            })
        };
        bot.sendMessage(messageChatId, 'Am i a good bot?', opts);
    }
 
    if (messageText === 'Yes') {
        bot.sendMessage(messageChatId, 'I\'m too love you!', { caption: 'I\'m bot!' });
    }
 
    if (messageText === 'No') {
        bot.sendMessage(messageChatId, ':(', { caption: 'I\'m bot!' });
    }
});