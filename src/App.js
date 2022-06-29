import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";
import AboutUs from "./routes/home/AboutUs.component";
import MovingServices from "./routes/moving-service/Moving.service.component";
import PianoAndSafes from "./routes/packing-service/Packing.service.component";
import PackingServices from "./routes/packing-service/Packing.service.component";
import StorageServices from "./routes/storage-service/Storage.service.component";
import ContactUs from "./routes/contact-us/Contact.component";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import Footer from "./components/footer/Footer.component";
/* <img
src="https://s3.us-west-2.amazonaws.com/moveviking.com/images/abstract.jpg"
alt="moving"
></img> */

function App() {
  return (
    <ParallaxProvider>
      <Parallax
        bgImage={
          "https://s3.us-west-2.amazonaws.com/moveviking.com/images/abstract.jpg"
        }
        strength={600}
      >
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<AboutUs />} />
            <Route path="moving-services" element={<MovingServices />}></Route>
            <Route path="/piano-safes" element={<PianoAndSafes />}></Route>
            <Route
              path="/packing-services"
              element={<PackingServices />}
            ></Route>
            <Route
              path="/storage-services"
              element={<StorageServices />}
            ></Route>
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
        </Routes>
        <Footer />
      </Parallax>
    </ParallaxProvider>
  );
}

export default App;
