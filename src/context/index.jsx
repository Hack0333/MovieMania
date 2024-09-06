import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebaseConfig";
import { useNavigate } from "react-router";

export const AuthContext = createContext(null);
export const useAuth = () => {
  return useContext(AuthContext);
};
export default function AuthState({ children }) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  function registerWithFirebase() {
    setIsLoading(true);
    const { email, password } = registerFormData;
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function loginWithFirebase() {
    const { email, password } = loginFormData;
    return signInWithEmailAndPassword(auth, email, password);
  }
  function handleLogout() {
    return signOut(auth);
  }

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(() => {
    const checkAuthState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => {
      checkAuthState();
    };
  }, []);

  useEffect(() => {
    if (user) navigate("/movies");
  }, [user]);


  return (
    <AuthContext.Provider
      value={{
        registerFormData,
        setRegisterFormData,
        loginFormData,
        setLoginFormData,
        registerWithFirebase,
        loginWithFirebase,
        isLoading,
        setIsLoading,
        handleLogout,
        user,
        query,
        setQuery,
        movies,
        setMovies,
        watched,
        setWatched,
        selectedId,
        setSelectedId,
        handleAddWatched,
        handleCloseMovie,
        handleDeleteWatched,
        error,
        setError,
        handleSelectMovie
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
