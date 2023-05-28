import { ReactNode } from "react";
import { Provider } from "react-redux";
import "leaflet/dist/leaflet.css";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./common/layout/Layout";
import store from "./redux/store";

const queryClient = new QueryClient();

type Props = {
  children: ReactNode;
};

const AppProvider = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <Router basename="">
          <Layout>
            <Routes>{children}</Routes>
          </Layout>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
};

export default AppProvider;
