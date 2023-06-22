import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAIfaiE4yDghgmlYeVojfekDdAsaD3_S5U",
    authDomain: "atsiskaitomas.firebaseapp.com",
    projectId: "atsiskaitomas",
    storageBucket: "atsiskaitomas.appspot.com",
    messagingSenderId: "210744371055",
    appId: "1:210744371055:web:13fceeb11fe6243dc62a9a",
    measurementId: "G-TB9FK81NDY"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

