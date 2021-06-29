import { databaseRef, firebaseAuth, provider } from "./firebaseConfig";
export default function Login({ setUserLogged, setUserImage, setUserName, setUserEmail }) {
    let signIn = () => {
        firebaseAuth
          .signInWithPopup(provider)
          .then((result) => {
            let user = result.user;
            // let userID = user.email.replaceAll(".", "_");
            // databaseRef.ref("users/" + userID).set({
            //   username: user.displayName,
            //   email: user.email,
            //   profile_picture: user.photoURL,
            // });
              setUserLogged(true);
              setUserImage(user.photoURL);
              setUserName(user.displayName);
              setUserEmail(user.email);
          })
          .catch((error) => {
            console.error(error.message);
          });
      };
    return (
        <div className="login-container">
            <h1>Welcome to Your Trip Planner</h1>
            <div className="login-buttons">
                {/* <button onClick={()=>signIn()} className="btn-primary">Sign Up with Google</button> */}
                <button onClick={()=>signIn()} className="btn-primary">Login with Google</button>
            </div>
        </div>
    )
}