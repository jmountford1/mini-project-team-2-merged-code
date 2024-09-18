import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Edit from "./pages/EditPage.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Registration.jsx";
import NotePage from "./pages/NotesPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/edit", element: <Edit /> },
  { path: "/register", element: <Register /> },
  { path: "/notes", element: <NotePage /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
