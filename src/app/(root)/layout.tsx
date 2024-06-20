import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import ScrollToTop from "@/components/ui/ScrollToTop";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="container m-auto">
        <Header />
        {children}
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Layout;
