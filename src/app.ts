import {bot} from './create-bot';

bot.on('message', (message => {
  console.log(message.chat.id);
}));
