import { Route } from "react-router-dom";
import ContactScreen from "./modules/ContactModule/ContactScreen";
import { routes } from "./routes/routes";
import MapsScreen from "./modules/MapsModule/MapsScreen";
import AppProvider from "./AppProvider";

function App() {
  return (
    <AppProvider>
      {/* Contact Screen */}
      <Route path={routes.CONTACT_SCREEN} element={<ContactScreen />} />
      <Route path={""} element={<ContactScreen />} />
      {/* Map and Chart Screen */}
      <Route path={routes.MAPS_SCREEN} element={<MapsScreen />} />
    </AppProvider>
  );
}

export default App;
