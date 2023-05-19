import { firebaseConfig } from "@/config";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export class FirebaseApp {
  static firebaseApp = undefined;
  static db = undefined;

  static init() {
    this.firebaseApp = initializeApp(firebaseConfig);
    this.db = getFirestore(this.firebaseApp);
  }
}
