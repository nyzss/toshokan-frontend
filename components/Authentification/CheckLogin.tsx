import { useEffect } from "react";
import { userStore } from "../../store/Store";

const CheckLogin: React.FC = () => {
  const { setUser, user } = userStore((state) => state);

  useEffect(() => {
    setUser();
  }, [setUser, user]);

  return <></>;
};

export default CheckLogin;
