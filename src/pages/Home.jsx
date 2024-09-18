import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import Login from "../components/Login.jsx";

export default function Home() {
  return (
    <div className="static">
      <NavBar />

      <div className="flex w-vh justify-center p-16 h-screen">
        <Login />
      </div>

      <Footer />
      <div />
    </div>
  );
}
