import { child, get } from "firebase/database";
import { dbRef } from './index'
export const getRTDBData = async (collectionName: string, userId: string | null) => {
    return get(child(dbRef, `${collectionName}`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            return snapshot.val()
        } else {
            console.log("No data available");
            return ''
        }
    }).catch((error) => {
        console.error(error);
        return error
    });
}