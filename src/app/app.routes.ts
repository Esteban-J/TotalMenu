import { Routes } from '@angular/router';
import { MenuDisplayComponent } from './menu/menu-display/menu-display.component';
import { MenuEditorComponent } from './admin/menu-editor/menu-editor.component';
import { LoginComponent } from './admin/login/login.component';
import { WelcomeComponent } from './menu/welcome/welcome.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent }, // Pantalla de bienvenida como ruta por defecto
  { path: 'menu', component: MenuDisplayComponent },
  { path: 'admin', component: MenuEditorComponent },
  { path: 'admin/login', component: LoginComponent },
];
