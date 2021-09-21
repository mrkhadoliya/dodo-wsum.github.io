import React from "react";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
function Layout(props) {
  return (
    <div className="overflow-y-auto font-sans">
      <div className="md:px-8 lg:px-8 xl:px-10 px-4 lg:py-0 py-4 w-full left-0 top-0 shadow-lg lg:shadow-md bg-white absolute">
        <Header />
      </div>
      <div className="w-full flex flex-col lg:pt-24 md:pt-16 pt-18">
        {props?.children}
      </div>
      <div className="md:px-8 lg:px-8 xl:px-8 px-4 lg:py-0 py-4 w-full bg-gray-200 border-t-2 border-primary">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
