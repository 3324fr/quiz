import { NgModule  }      from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule  }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil.component';
import { InstructionComponent } from './instruction.component';
import { TableaubordComponent } from './tableaubord.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ BrowserModule, FormsModule, AppRoutingModule  ],
  declarations: [ AppComponent,AccueilComponent, InstructionComponent,TableaubordComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
