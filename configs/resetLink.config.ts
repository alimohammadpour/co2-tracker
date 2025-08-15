import { ConfigService } from "@nestjs/config";

type ResetLinkOptions = { expiresIn: string; resetLinkBaseUrl: string }

export const resetLinkOptions = (configService: ConfigService): ResetLinkOptions => {
    return {
        expiresIn: configService.get('RESET_LINK_EXPIRES_IN') || '5m',
        resetLinkBaseUrl: configService.get('RESET_LINK_BASE_URL') || '',
    }
}