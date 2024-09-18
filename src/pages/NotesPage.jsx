import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TodoCard from "../components/TodoCard";
export default function NotePage() {

  for (item in json) {
    <TodoCard {} />
  }

  return (
    <>
      <NavBar />

      <div className="relative">
        <div className="flex flex-wrap justify-center gap-3 p-4 ">

        

          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>

        <Footer />
      </div>
    </>
  );
}
