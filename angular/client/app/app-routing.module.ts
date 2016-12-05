import { NgModule  }      from '@angular/core';
import { RouterModule, Routes  }   from '@angular/router';


import { AccueilComponent } from './accueil.component'; 
import { InstructionComponent } from './instruction.component';
import { TableaubordComponent } from './tableaubord.component';
import { QuestionrapideComponent } from './questionrapide.component';
import { ExamenComponent } from './examen.component';
import { AjouterquestionComponent } from './ajouterquestion.component';
import { ExamentermineComponent } from './examentermine.component';

const routes: Routes = [
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    { path: 'accueil', component: AccueilComponent},
    { path: 'instruction', component: InstructionComponent},
    { path: 'tableauBord', component: TableaubordComponent },
    { path: 'questionRapide', component: QuestionrapideComponent },
    { path: 'examen', component: ExamenComponent },
    { path: 'ajouterQuestion', component: AjouterquestionComponent },
    { path: 'examenTermine', component: ExamentermineComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})
export class AppRoutingModule {}
