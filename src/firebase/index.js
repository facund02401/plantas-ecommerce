import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {apiKey: "AIzaSyC_fBTd6EkuEy-1QjZ1Ds-m5lTYHTAn7f4",
authDomain: "plantas-ecommerce.firebaseapp.com",
projectId: "plantas-ecommerce",
storageBucket: "plantas-ecommerce.appspot.com",
messagingSenderId: "221036296827",
appId: "1:221036296827:web:a4598ee9857c4338d1c0de"
};


const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
