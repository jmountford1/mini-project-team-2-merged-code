import noteImg from "../assets/note.png";

export default function NavBar() {
  return (
    <>
      <nav className="bg-zinc-900 text-white ">
        <div className="inline-flex p-3 ">
          <img src={noteImg} alt="Notebook image" width="40" height="40" />{" "}
          <div className=" p-2 inline-flex gap-2 ">
            <a href="/" className="">
              {" "}
              login{" "}
            </a>
            <a href="/register" className="">
              {" "}
              Sign up{" "}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
