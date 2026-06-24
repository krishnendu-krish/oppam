import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  getCurrentUser,
} from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({
  children,
}) => {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);



  const fetchUser = async () => {

    try {

      const data =
        await getCurrentUser();

      setUser(data);

    }

    catch (error) {

      console.error(
        "Failed to fetch user:",
        error
      );

      localStorage.removeItem(
        "access"
      );

      localStorage.removeItem(
        "refresh"
      );

      setUser(null);

    }

    finally {

      setLoading(false);

    }

  };



  useEffect(() => {

    const token =
      localStorage.getItem(
        "access"
      );

    if (token) {

      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchUser();

    }

    else {

      setLoading(false);

    }

  }, []);




  const logout = () => {

    localStorage.removeItem(
      "access"
    );

    localStorage.removeItem(
      "refresh"
    );

    setUser(null);

  };



  return (

    <AuthContext.Provider

      value={{

        user,

        setUser,

        loading,

        logout,

        fetchUser,

      }}

    >

      {children}

    </AuthContext.Provider>

  );

};




// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {

  return useContext(
    AuthContext
  );

};