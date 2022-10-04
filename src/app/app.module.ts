import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AlertaService } from './servicios/alerta.service';
import { UsuariosService } from './servicios/usuarios.service';
import { CarouselModule } from 'primeng/carousel'
import { CarouselComponent } from './components/carousel/carousel.component';
import { environment } from 'src/environments/environment';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';

// Servicios
import { LibrosService } from './servicios/libros.service';
import { StorageService } from './servicios/storage.service';

// Guardia
import { LoginService } from './servicios/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ButtonModule,
    MenubarModule,
    CarouselModule,
    CardModule,
    DialogModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  providers: [AlertaService, UsuariosService, LibrosService, StorageService, LoginService], // se patentan los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
