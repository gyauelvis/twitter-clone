import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyDdj7qVA24271UVBpC0ByJEAvP2s8XGkFE",
    authDomain: "gtwitterclone.firebaseapp.com",
    projectId: "gtwitterclone",
    storageBucket: "gtwitterclone.appspot.com",
    messagingSenderId: "832237861614",
    appId: "1:832237861614:web:97e5d2409bc7f8876611ff",
    measurementId: "G-39CQ28DCS8",
};

const fireApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fireApp);

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");