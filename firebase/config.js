import firebase from 'firebase/app' //node_modulesからコアとなるfirebaseのパッケージをimportする、firebaseを使うなら必ずimportする必要がある
import 'firebase/firestore' // firestoreを使いたいのでimportする
import 'firebase/auth'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpP49ImnyKbFr0zzVI6v1BpEn6h5EjCuc",
  authDomain: "random-password-e1689.firebaseapp.com",
  projectId: "random-password-e1689",
  storageBucket: "random-password-e1689.appspot.com",
  messagingSenderId: "803027853186",
  appId: "1:803027853186:web:4dda147bcdb7911289f99b",
  measurementId: "G-7FPJ2PWCQV"
};

// init firebase
firebase.initializeApp(firebaseConfig) // バックエンドのfirebaseを初期化する

// init firestore service
const projectFirestore = firebase.firestore() // firebaseのサービスも初期化する
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.FieldValue.serverTimestamp //firebaseのtimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }