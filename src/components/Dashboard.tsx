import { useAuthContext } from "@/hooks/authHooks";
import { getFireStoreDoc } from "@/services/firebase/firesStore";
import { useEffect } from "react";
function Dashboard() {
  const { user } = useAuthContext();

  useEffect(() => {
    getFireStoreDoc('wpCategories');
  }, []);
  return (
    <div className="Dashboard">
      <h1>Welcome to Claire</h1>
      <h2>Firebase UUID: {user.userId}</h2>
      <h3>Firebase Token: {user.authToken}</h3>
    </div>
  );
}

export default Dashboard;
