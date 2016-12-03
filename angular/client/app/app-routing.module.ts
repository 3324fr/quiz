import { NgModule  }      from '@angular/core';
import { RouterModule, Routes  }   from '@angular/router';


import { AccueilComponent } from './accueil.component'; 
import { InstructionComponent } from './instruction.component';
import { TableaubordComponent } from './tableaubord.component';
import { QuestionrapideComponent } from './questionrapide.component';

const routes: Routes = [
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    { path: 'accueil', component: AccueilComponent},
    { path: 'instruction', component: InstructionComponent},
    { path: 'tableauBord', component: TableaubordComponent },
    { path: 'questionRapide', component: QuestionrapideComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})
export class AppRoutingModule {}
