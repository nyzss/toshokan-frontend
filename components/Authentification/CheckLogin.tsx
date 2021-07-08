import { useEffect } from "react";
import { userStore } from "../../store/Store";

const CheckLogin: React.FC = () => {
  const { setUser, user } = userStore((state) => state);

  useEffect(() => {
    //  const getLoggedIn = async () => {
    //    const user = await CheckLoggedIn();
    //    setUser(user);
    //  };

    // getLoggedIn();

    setUser();
  }, [setUser, user]);

  return <></>;
};

export default CheckLogin;
