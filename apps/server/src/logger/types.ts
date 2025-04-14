export type SeverityLevel = 'info' | 'warn' | 'error' | 'debug';

type ColorCode = '\x1b[32m' | '\x1b[33m' | '\x1b[31m' | '\x1b[34m';

export type SeverityColors = Record<SeverityLevel, ColorCode>;
