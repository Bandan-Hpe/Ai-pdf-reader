import { initializeApp, getApps, getApp, App, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const firebaseKey = require("@/firebase_key.json");

let app: App;

if (getApps.length === 0) {
  app = initializeApp({
    credential: cert(firebaseKey),
  });
} else {
  app = getApp();
}

const adminDb = getFirestore(app);

export { app as adminApp, adminDb };
