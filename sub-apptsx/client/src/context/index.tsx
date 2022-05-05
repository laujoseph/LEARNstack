// place where we store states
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// this is the state that lives in the useContext
interface User {
  data: {
    id: string;
    email: string;
    stripeCustomerId: string;
    isAdmin: boolean;
  } | null; // get back data is null if there's an error
  error: string | null;
  loading: boolean;
}

const UserContext = createContext<
  // useState hook that uses the User created above
  [User, React.Dispatch<React.SetStateAction<User>>]
>([
  { data: null, loading: true, error: null },
  // this function updates the state
  () => {},
]);

const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>({
    data: null,
    loading: true,
    error: null,
  });
  // ensure token is inside the header
  const token = localStorage.getItem("token");
  // this line adds the token to every single request as a default configuration
  if (token) {
    axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  }

  // fetch our users
  const fetchUser = async () => {
    const { data: response } = await axios.get("http://localhost:8080/auth/me");

    // if data
    if (response.data && response.data.user) {
      setUser({
        data: {
          id: response.data.user.id,
          email: response.data.user.email,
          stripeCustomerId: response.data.user.stripeCustomerId,
          isAdmin: response.data.user.isAdmin,
        },
        loading: false,
        error: null,
      });
    } else if (response.data && response.data.errors) {
      setUser({
        data: null,
        loading: false,
        error: response.errors[0].msg,
      });
    }
  };
  useEffect(() => {
    // fetch user only if token exists
    if (token) {
      fetchUser();
    } else {
      setUser({
        data: null,
        loading: false,
        error: null,
      });
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
