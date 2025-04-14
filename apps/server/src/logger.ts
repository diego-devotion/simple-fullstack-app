import { createLogger, format, transports } from 'winston';
import { env } from './config/env.js';

const { combine, timestamp, colorize, printf } = format;

const logger = createLogger({
  level: env.LOG_LEVEL,
  format: combine(
    timestamp(),
    printf(({ timestamp, level, message }) => `${timestamp} [${level.toUpperCase()}] ${message}`),
    colorize({ all: true })
  ),
  transports: [new transports.Console()]
});

export default logger;
