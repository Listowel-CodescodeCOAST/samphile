import React from "react";
import Link from "next/link";
import styles from "../registrar/Registrar.module.css";
import { AiTwotoneSetting } from "react-icons/ai";
import { FaHospitalUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FaHospitalSymbol } from "react-icons/fa"

const Registrar = ({ children }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.nav}>
        <div className={styles.nav_logo}> sam<span>PHILE</span><FaHospitalSymbol size={30}/></div>
        <div className={styles.nav_middel}>
          <form action="" className={styles.right}>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Patient's ID"
            />
            <button className={styles.search}>
              <BsSearch />
            </button>
          </form>
        </div>
        <div className={styles.nav_logout}>
          <BiLogOut size={22} />
        </div>
        <div className={styles.text}>
          <Link href="/">Log out</Link>
        </div>
      </div>
      <div className={styles.profile_side}>
        <div className={styles.text}>
          <button>
            <FaHospitalUser size={25} className={styles.icon} /><Link href="/registrar/addpatient">Add Patient</Link>
          </button>
        </div>
        <div className={styles.text}>
          <button>
            <FaHospitalUser size={25} className={styles.icon} /><Link href="/registrar/allpatients">All Patients</Link>
          </button>
        </div>
        <div className={styles.text}>
          <button>
            <AiTwotoneSetting size={30} className={styles.icon} /><Link href="/registrar/setting">Settings</Link>
          </button>
        </div>
      </div>
      <div className={styles.addpatient}>{children}</div>
    </div>
  );
};

export default Registrar;
