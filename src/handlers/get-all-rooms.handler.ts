import * as requestPromise from 'request-promise';

import {bot} from '../create-bot';
import {config} from '../config';
import {RoomInterface} from '../interafaces';

export const getAllRoomsHandler = async () => {
  let responseText = `Список кімнат: `;

  let rooms = await requestPromise.get(config.MAIN_SERVICE_URL + '/rooms');
  rooms = JSON.parse(rooms);

  if (!Array.isArray(rooms)) {
    throw new Error('Not valid response from BE');
  }

  rooms.forEach((room: RoomInterface) => {
    responseText += `\n
    Title: ${room.room_title} \n
    Temperature: ${room.temp} \n
    Module alive: ${room.is_alive ? 'YES' : 'NO'} \n
    Auto mode: ${room.auto_mode ? 'YES': 'NO'}
    \n
   \n`;
  });

  await bot.sendMessage(config.MY_CHAT_ID, responseText);
};
