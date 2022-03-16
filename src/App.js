import './App.css';
import React, { useEffect } from "react"
import PlayGround from './components/PlayGround.js'
import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { doc, addDoc, setDoc,  } from "firebase/firestore";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAuMMPuH_J2h0Dib9445N_ugW5TzOteO5k",
  authDomain: "minostone-ed914.firebaseapp.com",
  projectId: "minostone-ed914",
  storageBucket: "minostone-ed914.appspot.com",
  messagingSenderId: "447699093018",
  appId: "1:447699093018:web:006ae1e01c1b7c74fcf3a3",
  measurementId: "G-ZPJ3RJ5CDB"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


const myUnitsRef = collection(db, "MY_UNITS");
const enemyUnitsRef = collection(db, "ENEMY_UNITS");
const setMyUnitsDocument = async () => {
  var i = 1
  console.log("setMyUnitsDocument");
  await setDoc(doc(myUnitsRef, (i++).toString()), {
    id: i,
    name: "피카츄", level: 1, attack: 6,
    life: 10,
    skills: ["몸통박치기", "백만볼트"]
  });
  await setDoc(doc(myUnitsRef, (i++).toString()), {
    id: i,
    name: "파이리", level: 3, attack: 16,
    life: 20,
    skills: ["화염"]
  });
  await setDoc(doc(myUnitsRef, (i++).toString()), {
    id: i,
    name: "꼬부기", level: 1, attack: 4,
    life: 12,
    skills: ["물기둥"]
  });
  await setDoc(doc(myUnitsRef, (i++).toString()), {
    id: i,
    name: "이상해씨", level: 2, attack: 11,
    life: 11,
    skills: ["풀잎날리기", "덩굴채찍"]
  });
  await setDoc(doc(myUnitsRef, (i++).toString()), {
    id: i,
    name: "피죤", level: 3, attack: 15,
    life: 20,
    skills: ["몸통박치기"]
  });
}
const setEnemyUnitsDocument = async () => {
  var i = 50
  console.log("setEnemyUnitsDocument");
  await setDoc(doc(enemyUnitsRef, (i++).toString()), {
    id: i,
    name: "라이츄", level: 1, attack: 36,
    life: 40,
    skills: ["스태틱필드", "전광석화"]
  });
  await setDoc(doc(enemyUnitsRef, (i++).toString()), {
    id: i,
    name: "리자몽", level: 3, attack: 56,
    life: 70,
    skills: ["열파참"]
  });
  await setDoc(doc(enemyUnitsRef, (i++).toString()), {
    id: i,
    name: "거북왕", level: 1, attack: 45,
    life: 67,
    skills: ["하이드로펌프"]
  });
  await setDoc(doc(enemyUnitsRef, (i++).toString()), {
    id: i,
    name: "이상해꽃", level: 2, attack: 33,
    life: 81,
    skills: ["자연화"]
  });
  await setDoc(doc(enemyUnitsRef, (i++).toString()), {
    id: i,
    name: "뮤츠", level: 3, attack: 75,
    life: 44,
    skills: ["파괴광선"]
  });
}
setMyUnitsDocument();
setEnemyUnitsDocument();

function App() {
  return (
    <div className="App">
      <PlayGround />
    </div>
  );
}

export default App;
