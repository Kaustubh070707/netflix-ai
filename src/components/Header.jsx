import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_ICON } from "../utils/constants";
import { toggleAiSearchView } from "../utils/aiSlice";
import { SUPPORTED_LANGUAGE } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return unsubscribe;
  }, [dispatch, navigate]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleAiSearchClick = () => {
    dispatch(toggleAiSearchView());
  };

  const handleLanguageChange = (event) => {
    console.log(event.target.value);
    dispatch(changeLanguage(event.target.value));
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="relative flex items-center space-x-4">
          <div
            className="py-2 px-4 bg-red-800 text-white rounded-lg cursor-pointer"
            onClick={handleAiSearchClick}
          >
            AI Search
          </div>

          <select
            className="py-2 px-4 bg-red-800 text-white rounded-lg cursor-pointer"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGE.map(({ identifier, name }) => (
              <option key={identifier} value={identifier}>
                {name}
              </option>
            ))}
          </select>

          {/* User Icon and Menu */}
          <img
            src={USER_ICON}
            alt="user-icon"
            className="w-12 h-12 cursor-pointer"
            onClick={toggleMenu}
          />
          {menuOpen && (
            <div className="absolute top-full right-0 bg-white rounded-lg w-40 py-2">
              <button
                className="block px-4 py-2 text-black text-left w-full hover:bg-gray-100"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
