import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import SignUp from "../components/Signup.jsx";

export default function Register() {
  return (
    <div className="relative">
      <NavBar />

      <h1 className="text-center p-2 text-xl ">Create Account </h1>

      <div className="flex w-vh justify-center p-6 h-vh">
        <SignUp />
      </div>

      <Footer />
    </div>
  );
}
