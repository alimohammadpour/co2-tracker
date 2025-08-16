import { ConfigModule, ConfigService } from "@nestjs/config"
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm"

export const typeOrmModuleAsyncOptions = (): TypeOrmModuleAsyncOptions => {
    return {
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
            ...configService.get('database'),
            autoLoadEntities: true,
        }),
    }
}