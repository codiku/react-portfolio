import { collection, getDocs, query } from "firebase/firestore";
import { FirebaseApp } from "utils/firebase";

export class ProjectsAPI {
  static async fetchAll() {
    const response = await getDocs(
      query(collection(FirebaseApp.db, "projects"))
    );
    return Promise.all(
      response.docs.map(async (document) => {
        return {
          id: document.id,
          ...document.data(),
        };
      })
    );
  }
}
