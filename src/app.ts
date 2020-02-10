import {bot} from './create-bot';
import {startHandler} from './handlers/start.handler';
import {getAllRoomsHandler} from './handlers/get-all-rooms.handler';
import {config} from './config';
import {BotCommandsEnum} from './constants';

try {
  bot.sendMessage(config.MY_CHAT_ID, 'BOT IS READY');

  bot.onText(new RegExp(BotCommandsEnum.START), startHandler);
  bot.onText(new RegExp(BotCommandsEnum.GET_ROOMS), getAllRoomsHandler);

} catch (e) {
  bot.sendMessage(config.MY_CHAT_ID, JSON.stringify(e));
}

