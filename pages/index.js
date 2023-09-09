import { useRouter } from "next/router";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import { getSession } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        router.replace("/auth");
      }
    });
  }, []);
  return <div>{/* <MainNavigation /> */}</div>;
}
