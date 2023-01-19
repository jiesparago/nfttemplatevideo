import React, {useState, useEffect} from 'react';
import Image from "next/image";
import Link from "next/link";

//--Import Icon

import {MdNotifications} from "react-icons/md";
import {BsSearch} from "react-icons/bs";
import {CgMenuLeft, CgMenuRight} from "react-icons/cg";

//Internal Import
import Style from "./NavBar.module.css";
import {Discover, HelpCenter, Notifications, Profile, SideBar} from "./index";
import {Button} from "../componentsindex";
import images from "../../img";

const NavBar = () => {

  //--Usestate
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);


  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.log}>
            <Image src ={images.logo} alt ="NFT MARKET PLACE" width={100} height={100}/>
          </div>
          <div className={Style.navbar_container_left_box_input}></div>
        </div>
        <div className={Style.navbar_container_right}></div>
      </div>
    </div>
  )
}

export default NavBar