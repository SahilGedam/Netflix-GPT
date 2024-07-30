import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, PHOTO_URL } from "../utils/constants";

const Login = () => {
  // const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const nameInp = useRef(null);
  function toggleSignForm() {
    setIsSignInForm(!isSignInForm);
  }
  function handleButtonClick() {
    let message = checkValidData(email.current.value, password.current.value);

    setErrorMessage(message);
    if (message) {
      return;
    }
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameInp.current.value,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate("/browse");
              // Profile updated!
              // ...
            })
            .catch((error) => {
              setErrorMessage(error.message);
              // An error occurred
              // ...
            });

        

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
       

          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        
          // navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          
        });
    }
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMG} alt="bg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()} //prevent submit the form
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={nameInp}
            type="text"
            className="p-4 my-4 w-full bg-gray-600"
            placeholder="Name"
          />
        )}

        <input
          ref={email}
          type="text"
          className="p-4 my-4 w-full bg-gray-600"
          placeholder="Email Address"
        />
        <input
          ref={password}
          type="password"
          className="p-4 my-4 w-full bg-gray-600"
          placeholder="Password"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignForm} className="py-4 cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
