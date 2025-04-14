import { z } from 'zod';
import { config as winstonConfig } from 'winston';

const logLevels = Object.keys(winstonConfig.npm.levels);

export const logLevelSchema = (envName: string) =>
  z
    .string()
    .optional()
    .refine((val) => val === undefined || logLevels.includes(val), {
      message: `${envName} must be one of: ${logLevels.join(', ')}`
    });
