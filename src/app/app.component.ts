import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bookshop';
  constructor() {
    const config = {
      apiKey: "AIzaSyAg4eVqcGoHA43mM9UdmJdpEkgRl8f3jGQ",
      authDomain: "bookshop-eaa54.firebaseapp.com",
      databaseURL: "https://bookshop-eaa54.firebaseio.com",
      projectId: "bookshop-eaa54",
      storageBucket: "bookshop-eaa54.appspot.com",
      messagingSenderId: "435515438071"
    };
    firebase.initializeApp(config);
  }
}
