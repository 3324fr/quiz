import { NgModule  }      from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil.component';
import { InstructionComponent } from './instruction.component';
import { TableaubordComponent } from './tableaubord.component';
import { QuestionrapideComponent } from './questionrapide.component';
import { AjouterquestionComponent } from './ajouterquestion.component';
import { ExamentermineComponent } from './examentermine.component';
import { ExamenComponent } from './examen.component';
import { QuestionService } from './question.service';
import { StatService } from './stat.service';
import { ExamService } from './exam.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpModule, AppRoutingModule ],
  declarations: [AppComponent, AccueilComponent, InstructionComponent, TableaubordComponent, QuestionrapideComponent, ExamenComponent, AjouterquestionComponent, ExamentermineComponent],
  providers: [ QuestionService, StatService, ExamService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
