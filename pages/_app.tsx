import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import "../components/styles/animation-styles/post-comments.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
