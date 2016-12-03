import { NgModule  }      from '@angular/core';
import { RouterModule, Routes  }   from '@angular/router';


import { AccueilComponent } from './accueil.component'; 
import { InstructionComponent } from './instruction.component';
import { TableaubordComponent } from './tableaubord.component';

const routes: Routes = [
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    { path: 'accueil', component: AccueilComponent},
    { path: 'instruction', component: InstructionComponent},
    { path: 'tableauBord', component: TableaubordComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})
export class AppRoutingModule {}
