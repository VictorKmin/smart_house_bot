import * as TelegramBot from 'node-telegram-bot-api';

import {config} from './config/config';

export const bot = new TelegramBot(config.API_SECRET, {polling: true, onlyFirstMatch: true});
