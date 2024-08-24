import Footer from "@/components/global/footer";
import Header from "@/components/global/header";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
