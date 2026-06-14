import Image from "next/image";
import getMe from "./get-me";

export default async function Home() {
  const me = await getMe()
  console.log('Home->me', me)
  return (
   <></>
  );
}
