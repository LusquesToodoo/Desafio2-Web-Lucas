import { useState, useEffect } from "react";
import API from "../../../components/API";

const UserInformation = () => {
  const [user, setUser] = useState("");
  const getUserInfo = async () => {
    const url = `https://erm-api.azurewebsites.net/Employee/${localStorage.getItem(
      "userId",
    )}`;
    const [response] = await API(url);
    setUser(response.data);
    return user;
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  return user;
};
export default UserInformation;
