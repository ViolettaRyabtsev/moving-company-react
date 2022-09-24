import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";
import Home from "./routes/home/Home";
import MovingServices from "./routes/moving-service/Moving.service.component";
import PianoAndSafes from "./routes/packing-service/Packing.service.component";
import PackingServices from "./routes/packing-service/Packing.service.component";
import StorageServices from "./routes/storage-service/Storage.service.component";
import ContactUs from "./routes/contact-us/Contact.component";
import Footer from "./components/footer/Footer.component";
import ContactRoute from "./routes/contatct-route/ContactRoute";
import AboutUs from "./routes/about-us/About";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="moving-services" element={<MovingServices />}></Route>

          <Route path="/packing-services" element={<PackingServices />}></Route>
          <Route path="/storage-services" element={<StorageServices />}></Route>
          <Route path="/contact-us" element={<ContactRoute />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
