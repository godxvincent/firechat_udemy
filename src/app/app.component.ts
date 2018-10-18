import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  chats: Observable<any[]>;
  constructor(db: AngularFirestore) {
    console.log("Cargo la aplicación");
    this.chats = db.collection('chats').valueChanges();
    console.log(this.chats);
  }

}
