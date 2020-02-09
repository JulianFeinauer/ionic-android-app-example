import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MaintenancePage} from './maintenance.page';
import {RouterModule} from '@angular/router';
import {ToasterModule} from 'angular2-toaster';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        ToasterModule.forRoot(),
        RouterModule.forChild([
            {
                path: '',
                component: MaintenancePage
            }
        ]),
        MatIconModule,
        MatBadgeModule
    ],
    declarations: [MaintenancePage]
})
export class MaintenancePageModule {

}
