// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAwz1kET7wZc4uz420f6tg__xftWMXI9H8",
  authDomain: "task-changer.firebaseapp.com",
  projectId: "task-changer",
  storageBucket: "task-changer.appspot.com",
  messagingSenderId: "1004421656533",
  appId: "1:1004421656533:web:7c66c2bdcbea64b3ae575c",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { collection, addDoc } from "firebase/firestore";

function addData() {
    try {
    const docRef = await addDoc(collection(db, "users"), {
        first: "Adaaaaaaa",
        last: "Lovelace",
        born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
    } catch (e) {
    console.error("Error adding document: ", e);
    }
}

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

function showAlert() {
    console.log("どうなってんだ");
	alert("今日も楽しく開発しよう！");
}

document.getElementById("alertButton").onclick = function() {
	addData();
    alert("今日も楽しく開発しよう！");
};