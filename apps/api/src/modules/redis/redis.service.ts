import { Injectable, Logger, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleDestroy {
  private readonly logger = new Logger(RedisService.name);
  private readonly redis: Redis;

  constructor() {
    this.redis = new Redis({
      host: 'localhost',
      port: 6379,

      retryStrategy: (times) => {
        this.logger.warn(
          `Redis indisponível. Tentando reconectar (${times})...`,
        );

        return Math.min(times * 1000, 5000);
      },

      maxRetriesPerRequest: 1,
      enableOfflineQueue: false,
    });

    this.redis.on('connect', () => {
      this.logger.log('Conectado ao Redis.');
    });

    this.redis.on('ready', () => {
      this.logger.log('Redis pronto para uso.');
    });

    this.redis.on('error', (err) => {
      this.logger.error(`Erro no Redis: ${err.message}`);
    });

    this.redis.on('close', () => {
      this.logger.warn('Conexão com Redis encerrada.');
    });
  }

  get client() {
    return this.redis;
  }

  async onModuleDestroy() {
    await this.redis.quit();
  }
}
