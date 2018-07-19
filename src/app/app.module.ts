import { MaterialModule } from './material.module';
import { TesteModule } from './teste.module';
import { DataService } from './shared/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MytestmaterialComponent } from './mytestmaterial/mytestmaterial.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
   MatListModule, MatCardModule, MatCheckboxModule, MatDividerModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NewsComponent } from './pages/site/news/news.component';
import { UsersComponent } from './pages/site/users/users.component';
import { AboutComponent } from './pages/site/about/about.component';
import { HomeComponent } from './pages/site/home/home.component';
import { UserComponent } from './pages/site/users/user/user.component';
import { ContactComponent } from './pages/site/contact/contact.component';

import { PipetestePipe } from './pipeteste.pipe';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MytestmaterialComponent,
    NewsComponent,
    PipetestePipe,
    HomeComponent,
    UsersComponent,
    UserComponent,
    AboutComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
