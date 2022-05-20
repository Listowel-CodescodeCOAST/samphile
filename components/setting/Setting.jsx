import React from "react";
import Link from "next/link";
import styles from "../setting/Settings.module.css";
import { MdAccountCircle } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosHelpBuoy } from "react-icons/io";

const Setting = () => {
  return (
    <div className={styles.setting}>
      <div className={styles.setting_top}>
        <h1>Account Settings</h1>
        <h4>Change your profile and account settings</h4>
      </div>
      <div className={styles.settins_but}>
        <div className={styles.btu_left}>
          <h4>
            <MdAccountCircle size={20} />
            <span><Link href="/registrar/setting/account">Account</Link></span>
          </h4>
          <h4>
            <RiLockPasswordFill size={20} />
            <span>Password</span>
          </h4>
          <h4 className={styles.text}>
            <IoIosHelpBuoy size={20} />
            <span>Help</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Setting;