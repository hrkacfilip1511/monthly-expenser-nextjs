import Link from "next/link";
import classes from "./MainNavigation.module.css";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { CiSearch, CiUser } from "react-icons/ci";
import { GoGoal } from "react-icons/go";
import {
  MdOutlineSpaceDashboard,
  MdAttachMoney,
  MdOutlineAnalytics,
  MdOutlinePassword,
  MdHelpOutline,
  MdAddCircle,
} from "react-icons/md";
import { useRouter } from "next/router";
const MainNavigation = (props) => {
  const [isProfilOptionOpened, setIsProfilOptionOpened] = useState(false);
  const [isSidebarShowed, setIsSidebarShowed] = useState(false);
  const router = useRouter();

  const signOutHandler = () => {
    signOut();
    router.replace("/auth");
  };

  const toggleSidebar = () => {
    setIsSidebarShowed((prevBool) => !prevBool);
  };

  return (
    <div className={classes.barNavigation}>
      <div className={classes.mainAppHeading}>
        <h1 className={classes.appName}>App name</h1>
        <h2>
          Welcome, <span className={classes.username}>{props.sessionName}</span>
        </h2>
        <div className={classes.searchingTransaction}>
          <CiSearch />
          <input type="text" placeholder="Search transactions" />
        </div>
        <div className={classes.avatar}>
          <CiUser
            onClick={() => setIsProfilOptionOpened((prevBool) => !prevBool)}
          />
          {isProfilOptionOpened && (
            <div className={classes.profileOptions}>
              <span className={classes.signOutOption} onClick={signOutHandler}>
                Sign out
              </span>
            </div>
          )}
        </div>
      </div>
      <div
        className={`${classes.sidebar} ${
          isSidebarShowed ? "" : classes.hideSidebar
        }`}
      >
        <div className={classes.navigation}>
          <Link href={"/"} className={classes.navLink}>
            <MdOutlineSpaceDashboard />
            <span>Dashboard</span>
          </Link>
          <Link href={"/budget"} className={classes.navLink}>
            <MdAttachMoney />
            <span>Budget</span>
          </Link>
          <Link href={"/analytics"} className={classes.navLink}>
            <MdOutlineAnalytics />
            <span>Analytics</span>
          </Link>
          <Link href={"/add-expense"} className={classes.navLink}>
            <MdAddCircle />
            <span>Add expense</span>
          </Link>
          <Link href={"/change-password"} className={classes.navLink}>
            <MdOutlinePassword />
            <span>Change password</span>
          </Link>
          <Link href={"/help"} className={classes.navLink}>
            <MdHelpOutline />
            <span>Help</span>
          </Link>
          <Link href={"/goals"} className={classes.navLink}>
            <GoGoal />
            <span>Goals</span>
          </Link>
        </div>
        <div
          className={`${classes.menuOption} ${
            isSidebarShowed ? classes.active : ""
          }`}
          onClick={toggleSidebar}
        >
          <div className={classes.menuBar}></div>
          <div className={classes.menuBar}></div>
          <div className={classes.menuBar}></div>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
