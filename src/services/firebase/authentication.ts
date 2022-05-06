import { signInAnonymously } from "firebase/auth";
import { auth } from "./index";

export const authentication = {
    // firebase helper methods go here... 
    signInAnonymously: async () => {
        await signInAnonymously(auth)
    },
    signin: () => {

    },
    signout: () => {

    },
}