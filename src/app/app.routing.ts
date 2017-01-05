import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

const appRoutes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
];

export let routerModule = RouterModule.forRoot(appRoutes);
