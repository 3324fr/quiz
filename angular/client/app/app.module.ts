import { NgModule  }      from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule  }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil.component';
import { InstructionComponent } from './instruction.component';
import { TableaubordComponent } from './tableaubord.component';
import { QuestionrapideComponent } from './questionrapide.component';
import { ExamenComponent } from './examen.component';
import { QuestionService } from './question.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule ],
  declarations: [AppComponent, AccueilComponent, InstructionComponent, TableaubordComponent, QuestionrapideComponent,ExamenComponent],
  providers: [ QuestionService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
