import { Module } from '@nestjs/common';
import { GuildsModule } from './guilds/guilds.module';
import { QuestsModule } from './quests/quests.module';

@Module({
  imports: [GuildsModule, QuestsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
