import { useEffect } from "react";
import MainNavigation from "../../MainNavigation/MainNavigation";
import { getSession, useSession } from "next-auth/react";
import { useState } from "react";

const Layout = (props) => {
  const [sessionName, setSessionName] = useState("");
  const { data: session, status } = useSession();
  return (
    <div>
      {session && <MainNavigation sessionName={session.user.name} />}
      {props.children}
    </div>
  );
};
export default Layout;
