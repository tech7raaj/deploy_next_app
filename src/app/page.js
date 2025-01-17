import Image from "next/image";

export default function Home() {
  return (
    <>
  <h1>hii my name is ----  {process.env.NEXT_PUBLIC_USER_NAME}</h1>
  <h1>hii my email is ----  {process.env.NEXT_PUBLIC_USER_EMAIL}</h1>
  <h1>hii my password is ----  {process.env.NEXT_PUBLIC_USER_PASS}</h1>
  <p>final touch deployment is end</p>
    </>
  );
}
