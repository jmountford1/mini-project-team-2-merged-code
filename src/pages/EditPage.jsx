import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Edit() {
  return (
    <>
      <NavBar />

      <div className="flex justify-center p-4">
        <div className="rounded-lg border-1 p-4 border-gray-300 w-3/4   shadow-2xl ">
          <div className="bg-yellow-400 border-1 h-12 p-2 flex items-center justify-center gap-2 border-yellow-400">
            <span>0</span>
            <div> Title </div>
            <span> Date</span>
          </div>
          <form action="">
            <textarea
              id="content"
              rows="20"
              cols="400"
              className="w-full  border-2 p-4 border-gray-300 "
            ></textarea>
            <br />

            <div className="flex gap-2">
              <input
                className="rounded-lg bg-yellow-400 p-2 hover:bg-yellow-500"
                type="submit"
                value="update"
              ></input>
              <a
                href="/notes"
                className="rounded-lg bg-yellow-400 p-2 hover:bg-yellow-500"
              >
                {" "}
                Exit
              </a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
