import { createContext, useState, useEffect } from "react";
import fire from "../config/fire";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext({});
const {  googleProvider, database } = fire;

const AuthProvider = ({ children }) => {
  const auth = fire.auth();
  const history = useHistory();
  const [state, setState] = useState({ currentUser: auth.currentUser });

  const logout = () => {
    auth.signOut().then((x) => {
      history.push("/");
    });
  };

  const login = async () => {
    auth
      .signInWithPopup(googleProvider)
      .then(async (result) => {
        // The signed-in user info.
        const user = result.user;

        let userObj = {
          name: user.displayName,
          email: user.email,
          uid: user.uid,
        };

        async function addUser(data) {
          let collection = await database
            .collection("user")
            .doc(user.uid)
            .set(data);
          return await collection.add(data);
        }
        await addUser(userObj);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log({ errorCode, errorMessage, email, credential, error });
      });
  };
  const setCurrentUser = (userAuth) => {setState({ ...state, currentUser: userAuth })};

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      setCurrentUser(userAuth)
    });
    return () => unsubscribe();
  }, [auth, setCurrentUser]);

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider