import { useState } from "react";
import Login from "./Login";
import ProfilePage from "./ProfilePage";

export default function Home() {
  let [isUserLogged, setUserLogged] = useState(false);
  let [userImage, setUserImage] = useState("");
  let [userName, setUserName] = useState("");
  let [userEmail, setUserEmail] = useState("");
  return (
    <>
      {isUserLogged ? (
        <ProfilePage
          userImage={userImage}
          userName={userName}
          userEmail={userEmail}
        />
      ) : (
        <Login
          setUserLogged={setUserLogged}
          setUserImage={setUserImage}
          setUserName={setUserName}
          setUserEmail={setUserEmail}
        />
      )}
    </>
  );
}
