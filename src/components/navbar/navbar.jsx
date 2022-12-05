import { Outlet, Link } from "react-router-dom";

import cronwnLogo from "../../assets/crown.svg";
import { useState } from "react";

export default function Navigation() {
  const [currentUser, setCurrentUser] = useState("");

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "",
    },
    {
      id: 3,
      name: "John Smith",
      email: " ",
    },
    {
      id: 4,
      name: "Jane Smith",
      email: " ",
    },
    {
      id: 5,
      name: "John Doe",
      email: " ",
    },
  ];

  const signIn = () => {
    const user = users[Math.floor(Math.random() * users.length)];
    setCurrentUser(user);
  };

  const signOut = () => {
    setCurrentUser("");
  };

  return (
    <div className="navigation">
      <Link to="#" className="logo-container">
        <img src={cronwnLogo} alt="logo" />
      </Link>
      <div className="options">
        <Link to="#" className="nav-links">
          SHOP
        </Link>
        <Link to="#" className="nav-links">
          CONTACT
        </Link>
        <p>{currentUser}</p>
        {currentUser ? (
          <div className="nav-links" onClick={() => signOut}>
            SIGN OUT
          </div>
        ) : (
          <Link className="nav-links" onClick={() => signIn}>
            SIGN IN
          </Link>
        )}
      </div>
      <Outlet />
    </div>
  );
}
