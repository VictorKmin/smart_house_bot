import {bot} from '../create-bot';
import {config} from '../config/config';

export const startHandler = async () => {
  await bot.sendMessage(config.MY_CHAT_ID, 'hello', {
    reply_markup: {
      keyboard: [['Get room statistic']],
      one_time_keyboard: true
    }
  } as any);
};
