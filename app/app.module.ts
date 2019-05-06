import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NotasService } from './notas.service';
 import { AngularFireModule} from '@angular/fire';
 import {AngularFireDatabaseModule} from '@angular/fire/database';
 import { AngularFirestore} from '@angular/fire/firestore';
 const firebaseConfig = {
    apiKey: "AIzaSyBdtsWaETf2aqCj5p-PKyuTGLAl7SGhCiI",
    authDomain: "notas-ba199.firebaseapp.com",
    databaseURL: "https://notas-ba199.firebaseio.com",
    projectId: "notas-ba199",
    storageBucket: "notas-ba199.appspot.com",
    messagingSenderId: "1054101045627",
    appId: "1:1054101045627:web:663b6794986f5c93"
 };
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    
     
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ,
    AngularFirestore,
    NotasService
  ]
})
export class AppModule {}
