import { z } from 'zod';

export const portEnvSchema = (envName: string, defaultValue: number) =>
  z.preprocess(
    (val) => {
      const portNumber = Number(val);
      return Number.isNaN(portNumber) ? undefined : portNumber;
    },
    z
      .number()
      .int({ message: `${envName} must be an integer` })
      .min(1, { message: `${envName} must be at least 1` })
      .max(65535, { message: `${envName} must be at most 65535` })
      .default(defaultValue)
  );
