import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AppRoutes from "./routes";

function App() {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Navbar />

      <div className='flex-grow'>
        <AppRoutes />
      </div>

      <Footer />
    </div>
  );
}

export default App;
