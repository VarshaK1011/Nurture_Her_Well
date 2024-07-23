import Aboutus from "./components/Aboutus";
import FeedBack from "./components/Feedback";
import Login from "./components/auth/Login";
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Helpline from "./components/container/Helpline";

import Chatbot from "./components/container/Chatbot";

import Register from "./components/auth/Register";
import firebase from 'firebase/compat/app'; // Importing compat version for Firebase v9 modular SDK

import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import {
  Navbar,
  Home,
  About,
  Contact,
  Footer,
  Professionals,
  Blog,
} from "./components/index";
import DialogflowChatbot from "./components/container/DialogflowChatbot";
import Analytics from "./components/container/Analytics";

firebase.initializeApp({
  apiKey: "AIzaSyAkOYrlPiFk12hS-l6lp47roFZmN1j7jyI",
  authDomain: "chating-9c418.firebaseapp.com",
  databaseURL: "https://chating-9c418-default-rtdb.firebaseio.com",
  projectId: "chating-9c418",
  storageBucket: "chating-9c418.appspot.com",
  messagingSenderId: "923207017401",
  appId: "1:923207017401:web:d415c2d34b784d95efcc68",
  measurementId: "G-0H51CL174D"
})
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const analytics = firebase.analytics();

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);
function App() {
 
  return (
    <div className="font-Poppins bg-Solitude">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
                <About />
                <Analytics/>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/aboutus"
            element={
              <Layout>
                <Aboutus />
              </Layout>
            }
          />
          <Route
            path="/feedback"
            element={
              <Layout>
                <FeedBack />
              </Layout>
            }
          />
           <Route
            path="/register"
            element={
              <Layout>
                <Register />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path="/interactwithus"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
           <Route
            path="/helpline"
            element={
              <Layout>
                <Helpline />
              </Layout>
            }
          />
          <Route
            path="/blogs"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route
            path="/professionals"
            element={
              <Layout>
                <Professionals />
              </Layout>
            }
          />

          <Route
            path="/chatPage"
            element={
              <Layout>
                <Chatbot />
                <DialogflowChatbot/>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
