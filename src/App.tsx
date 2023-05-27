import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "./common/layout/Layout";
import ContactScreen from "./modules/ContactModule/ContactScreen";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router basename="">
        <Layout>
          <Routes>
            <Route path={"contact"} element={<ContactScreen />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
