import Navbar from "@/components/Navbar";
import { WorkoutsContextProvider } from "@/lib/context/WorkoutsContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <WorkoutsContextProvider>
        <Navbar />{" "}
        <div className="pages">
          <Component {...pageProps} />
        </div>
      </WorkoutsContextProvider>
    </>
  );
}
