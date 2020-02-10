import {bot} from '../create-bot';
import {config} from '../config';
import {BotCommandsEnum} from '../constants';

export const startHandler = async () => {
  await bot.sendMessage(config.MY_CHAT_ID, 'hello', {
    reply_markup: {
      keyboard: [[BotCommandsEnum.GET_ROOMS]],
      one_time_keyboard: true
    } as any
  });
};
