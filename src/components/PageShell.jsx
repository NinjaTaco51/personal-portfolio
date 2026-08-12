import Navbar from "./Navbar";
import Footer from "./Footer";

function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default PageShell;