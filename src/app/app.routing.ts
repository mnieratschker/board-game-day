import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DatesComponent } from './dates/dates.component';

const appRoutes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dates', component: DatesComponent }
];

export let routerModule = RouterModule.forRoot(appRoutes);
