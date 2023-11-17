"use client";
import { ThemeProvider } from "next-themes";

import Nav from "./Nav";
import Footer from "./Footer";
import { ApolloProvider } from "@apollo/client";
import client from "@/apollo-client";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider attribute="class">
        <div className="w-full">
          <Nav />
          {children}
          <Footer />
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default Layout;
