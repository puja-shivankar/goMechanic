import { useState } from "react";
import { logo, menu, cart, mic, searchMenu, searchIcon, user } from "./images";

import { FilledButton, FloatingSearch } from "./minorComponents";
const SpareHeader = () => {
  const [focused, setFocused] = useState("none");
  return (
    <>
      <span className="newMessage">
        <span className="leftContent">
          <FilledButton text="NEW" />
          Pay Online And Get Exclusive Offers On Genuine Car Spares!
        </span>
        <span className="rightContent">
          <span>Helpline: 8:00AM - 8:00PM (IST)</span>
          <span>7030003000</span>
        </span>
      </span>
      <div className="navBar">
        <span className="leftNavbar">
          <span className="leftLogoMenue">
            <img src={menu} className="menu" alt="menu" />
            <img src={logo} className="logo" alt="logo" />
          </span>
          <span className="searchBar">
            <input
              type="text"
              placeholder="Search by Part No, Name, Brand"
              onFocus={() => setFocused("block")}
              onBlur={() => setFocused("none")}
            />
            <span className="icons">
              <img src={mic} className="mic" alt="mic" />
              <img src={searchMenu} className="searchMenu" alt="searchMenu" />
            </span>
            <FloatingSearch display={focused} />
          </span>
        </span>
        <span className="rightNavbar">
          <span className="menueItem">Spares Catalog</span>
          <span className="menueItem">Locate Us</span>
          <span className="menueItem">
            <FilledButton
              text={"Login/Sign up"}
              event={() => alert("you can pass your event here..")}
            />
          </span>

          <span className="menueItem searchIcon">
            <img src={searchIcon} alt="cart" />
          </span>
          <span className="menueItem userIcon">
            <img src={user} alt="cart" />
          </span>
          <span className="menueItem cart">
            <img src={cart} className="cart" alt="cart" />
            <span className="cartNumber">5</span>
          </span>
        </span>
      </div>
    </>
  );
};

export default SpareHeader;
