import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { AboutComponent } from './layouts/about/about.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ScrollToTopComponent } from './layouts/scroll-to-top/scroll-to-top.component';
import { SkillsComponent } from './layouts/skills/skills.component';
import { CertificatesComponent } from './layouts/certificates/certificates.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsProviderModule } from './icons-provider.module';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { ProjectsComponent } from './layouts/projects/projects.component';
import { ResumeComponent } from './layouts/resume/resume.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MenuDrawerComponent } from './layouts/menu-drawer/menu-drawer.component';
import { MessageComponent } from './layouts/message/message.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    ScrollToTopComponent,
    SkillsComponent,
    CertificatesComponent,
    ProjectsComponent,
    ResumeComponent,
    ContactComponent,
    FooterComponent,
    MenuDrawerComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NzGridModule,
    NzButtonModule,
    IconsProviderModule,
    CarouselModule,
    NzFormModule,
    NzInputModule,
    NzDrawerModule,
    NzBadgeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
