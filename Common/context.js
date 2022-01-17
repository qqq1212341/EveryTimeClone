import React, { useContext } from "react";

export const UserContext = React.createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

// 사용 예시
// const user = useUserContext();
// console.log(user);
