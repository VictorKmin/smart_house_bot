import {bot} from './create-bot';
import {startHandler} from './handlers/start.handler';

bot.on('message', (message => {
  console.log(message.chat.id);
}));

const sR = new RegExp('/start');

bot.onText(sR, startHandler);
