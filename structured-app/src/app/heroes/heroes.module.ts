import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class HeroesModule { }

/*

Do create an Angular module for all distinct features in an application (e.g. Heroes feature).

Do place the feature module in the same named folder as the feature area (.e.g app/heroes).

Do name the feature module file reflecting the name of the feature area and folder (e.g. app/heroes/heroes.module.ts)

Do name the feature module symbol reflecting the name of the feature area, folder, and file (e.g. app/heroes/heroes.module.ts defines HeroesModule)

Why? A feature module can expose or hide its implementation from other modules.

Why? A feature module identifies distinct sets of related components that comprise the feature area.

Why? A feature module can easily be routed to both eagerly and lazily.

Why? A feature module defines clear boundaries between specific functionality and other application features.

Why? A feature module helps clarify and make it easier to assign development responsibilities to different teams.

Why? A feature module can easily be isolated for testing.

*/