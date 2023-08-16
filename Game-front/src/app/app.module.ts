import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogosService } from './jogos.service';
import { JogoComponent } from './components/jogo/jogo.component';

@NgModule({
    declarations: [AppComponent, JogoComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        ModalModule,
        FormsModule,
    ],
    providers: [HttpClientModule, JogosService],
    bootstrap: [AppComponent],
})
export class AppModule {}
