import { getDocs, collection, query } from '@firebase/firestore'
import { fireStore } from '@/services/firebase/index'
export const getFireStoreDoc = async (collectionName: string) => {
  const q = query(collection(fireStore, collectionName));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
  return querySnapshot;
}