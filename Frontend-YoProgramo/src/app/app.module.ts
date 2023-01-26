import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompoComponent } from './compo/compo.component';
import { HeaderComponent } from './compo/header/header.component';
import { AcercaComponent } from './compo/acerca/acerca.component';
import { ExperienciaComponent } from './compo/experiencia/experiencia.component';
import { EducacionComponent } from './compo/educacion/educacion.component';
import { SkillsComponent } from './compo/skills/skills.component';
import { ProyectosComponent } from './compo/proyectos/proyectos.component';
import { BannerHeroComponent } from './compo/banner-hero/banner-hero.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    CompoComponent,
    HeaderComponent,
    AcercaComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    BannerHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
