import { CorsOptions } from 'cors';

export interface ApiConfig {
  port: number;
  corsOrigin: CorsOptions['origin'];
}
