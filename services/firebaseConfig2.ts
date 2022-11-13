import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = initializeApp({
  apiKey: 'AIzaSyA09Nrnn32C1UIYLD4GF7qp2adqfmbeJrk',
  authDomain: 'moneysafe-bfcf1.firebaseapp.com',
  projectId: 'moneysafe-bfcf1',
});

export const db = getFirestore(firebaseConfig);