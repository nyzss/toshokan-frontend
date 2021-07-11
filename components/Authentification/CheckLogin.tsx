import { useEffect } from "react";
import { userStore } from "store/Store";

const CheckLogin: React.FC = () => {
  const { setUser } = userStore((state) => state);

  useEffect(() => {
    setUser();
  }, [setUser]);

  return <></>;
};

export default CheckLogin;
