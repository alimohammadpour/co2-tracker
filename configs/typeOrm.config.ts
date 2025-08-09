import { ConfigModule, ConfigService } from "@nestjs/config"
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm"
import { User } from "src/user/user.entity"

export const typeOrmModuleAsyncOptions = (): TypeOrmModuleAsyncOptions => {
    return {
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
            type: configService.get<'mysql'>('DATABASE_TYPE'),
            host: configService.get<string>('DATABASE_HOST'),
            port: configService.get<number>('DATABASE_PORT'),
            username: configService.get<string>('DATABASE_USERNAME'),
            password: configService.get<string>('DATABASE_PASSWORD'),
            database: configService.get<string>('DATABASE_NAME'),
            entities: [User],
            synchronize: true,
        }),
    }
}