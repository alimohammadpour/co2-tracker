import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModuleAsyncOptions } from "@nestjs/jwt";

export const jwtModuleAsyncOptions = (): JwtModuleAsyncOptions => {
    return {
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => ({
            secret: configService.get<string>('JWT_SECRET'),
            signOptions: {
                expiresIn: configService.get<string>('JWT_EXPIRES_IN'),
            },
        }),
    }
} 