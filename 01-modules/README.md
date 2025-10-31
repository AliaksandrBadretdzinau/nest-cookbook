## 🏛️ 01. Modules

## Purpose

Organize your app into feature boundaries.

---

## Think of a Module as

> 🧱 The room in your temple — each room contains its own logic, guards, and tools.

---

## Key Topics

* `@Module()` anatomy (`imports` / `controllers` / `providers` / `exports`)
* Provider visibility & exports
* Dynamic Modules (`forRoot`, `forFeature`)
    > “Dynamic modules are the factories of NestJS — they let you create configurable, reusable building blocks.”
* Global Modules `@Global()`

---

## Analogy

> “Modules are like self-contained chambers — each knows its purpose and who’s allowed inside.”


```
// guilds.module.ts
import { Module } from '@nestjs/common';
import { GuildsController } from './guilds.controller';
import { GuildsService } from './guilds.service';

@Module({
  controllers: [GuildsController],
  providers: [GuildsService],
  exports: [GuildsService], // share with other modules
})
export class GuildsModule {}
```

## Hands-on Quest

Build GuildsModule + QuestsModule, wire them into AppModule.
