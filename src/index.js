import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc
}   from 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0UmuYEWiCNIwtbQTEw8Xgg1bh7nWICu0",
    authDomain: "mywebsite-31ced.firebaseapp.com",
    projectId: "mywebsite-31ced",
    storageBucket: "mywebsite-31ced.firebasestorage.app",
    messagingSenderId: "506767137938",
    appId: "1:506767137938:web:cce0325932049810b9da4b",
    measurementId: "G-4450RL85JZ"
};


// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore(); //db stands fot database


//collection ref
const colRef = collection(db, 'hobbies');

//--------------- get collection data----------------
/*getDocs(colRef)
    .then((snapshot) => {
        let hobbies = [];
        snapshot.docs.forEach((doc) => {
            hobbies.push({ ...doc.data(), id: doc.id})
        })
        console.log(hobbies);
    })

    .catch(err => {
        console.log(err.message);
    })*/

//---------------------------------------------------


//real time collection data
onSnapshot(colRef, (snapshot) => {
    let hobbies = [];
    snapshot.docs.forEach((doc) => {
        hobbies.push({ ...doc.data(), id: doc.id})
    })
    console.log(hobbies);
})

//adding documents

const addHobbyForm = document.querySelector('.add')
addHobbyForm.addEventListener('submit', (e) => {
    e.preventDefault();

    addDoc(colRef, {
        title: addHobbyForm.title.value,
        hobby: addHobbyForm.hobby.value,
    })
    .then(() => {
        addHobbyForm.reset();
    })
})

//Deleting documents
const deleteHobbyForm = document.querySelector('.delete')
deleteHobbyForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const docRef = doc(db, 'hobbies', deleteHobbyForm.id.value)

    deleteDoc(docRef)
    .then(() => {
        deleteHobbyForm.reset();
    })
})
