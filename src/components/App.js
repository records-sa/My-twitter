import { useState } from "react";
import AppRouter from "components/Router";
import fbase, { authService } from "fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} My twitter</footer>
    </>
  );
}

export default App;
