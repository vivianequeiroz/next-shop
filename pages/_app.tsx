import { globalStyles } from "@/styles/global";
import { AppProps } from "next/app";
import logoImg from "../assets/logo.svg";
import storeNameImg from "../assets/storeName.png";
import { Container, Header } from "@/styles/pages/app";
import Image from "next/image";

function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <Container>
      <Header>
        <Image
          src={logoImg.src}
          alt="Next Shop T-shirt Icon with gradient of purple and pink"
          width={70}
          height={70}
        />
        <Image
          src={storeNameImg.src}
          alt="Next Shop name with Font Space type"
          width={300}
          height={32}
        />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}

export default App;
