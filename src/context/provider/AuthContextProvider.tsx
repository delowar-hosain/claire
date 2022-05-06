import { useEffect, useState } from "react";
import { AuthContext } from "@/context/createContext";
import { auth } from "@/services/firebase";
import { signInAnonymously, getIdToken } from "firebase/auth";
import { ProviderProps } from "@/interface/type"
export const AuthContextProvider = ({ children }: ProviderProps) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (!userId || !token) {
      signInAnonymously(auth).then(async (user) => {
          setUserId(user?.user?.uid);
          setToken(await getIdToken(user?.user));
        });
    }
  }, [userId, token]);
  return (
    <AuthContext.Provider
      value={{
        auth: {
          authUId: userId,
          authToken: token,
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
