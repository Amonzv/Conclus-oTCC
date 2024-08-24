
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js"
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js"

const firebaseConfig = {
  apiKey: "AIzaSyCK5c5uVfm2b14x5VZkjCh_hwuh97KK-Dc",
  authDomain: "a-tcc-392c2.firebaseapp.com",
  databaseURL: "https://a-tcc-392c2-default-rtdb.firebaseio.com",
  projectId: "a-tcc-392c2",
  storageBucket: "a-tcc-392c2.appspot.com",
  messagingSenderId: "964897927145",
  appId: "1:964897927145:web:fc64dba5874bcdcaa0a578",
  measurementId: "G-MGYLQJ8J4L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const database = getDatabase(app)
const storage = getStorage(app)

export { app, auth, database, storage }
