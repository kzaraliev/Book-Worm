import { useContext } from "react";

import AuthContext from "../../context/authContext";
import Figure from "react-bootstrap/Figure";

export default function Profile() {
  const user = useContext(AuthContext);

  return (
    <>
      <p>{user.username}</p>
      <Figure.Image width={400} height={280} src={user.imgURL} />

      {/* TODO:
            Add all user's props
            User can change their username and imgURL
            Make books have owner (user can see all the books he has made)
      */}
    </>
  );
}
