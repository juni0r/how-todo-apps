import * as firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBgIzornQ8Yculn3OlOxzXNeNyUbreLwys",
  authDomain: "how-todo-apps.firebaseapp.com",
  projectId: "how-todo-apps"
});

const db = firebase.firestore();
const todosRef = db.collection("todos");

export { todosRef };
