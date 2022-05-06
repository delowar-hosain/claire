import Header from "./Header";
import Footer from "./Footer";
import { ProviderProps } from "../interface/type";
const Pages = ({ children }: ProviderProps) => {
  return (
    <>
      <Header />
      <div className="master-content">{children}</div>
      <Footer />
    </>
  );
};

export default Pages;
