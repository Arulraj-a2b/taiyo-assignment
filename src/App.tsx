import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "./common/layout/Layout";
import ContactScreen from "./modules/ContactModule/ContactScreen";
import store from "./redux/store";
import { routes } from "./routes/routes";
import MapsScreen from "./modules/MapsModule/MapsScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "leaflet/dist/leaflet.css";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router basename="">
          <Layout>
            <Routes>
              <Route path={routes.CONTACT_SCREEN} element={<ContactScreen />} />
              <Route path={routes.MAPS_SCREEN} element={<MapsScreen />} />
            </Routes>
          </Layout>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
