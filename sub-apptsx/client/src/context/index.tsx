// place where we store states
import React, { createContext, useState } from "react";
import axios from "axios";

interface User {
  data: {
    id: string;
    email: string;
  } | null; // get back data is null if there's an error
  error: string | null;
  loading: boolean;
}

const UserContext = createContext<
  //
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
    const { data } = await axios.get("http://localhost:8080/auth/me");

    console.log(data);
  };

  fetchUser();
};

export { UserContext, UserProvider };
