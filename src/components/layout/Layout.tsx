"use client";
import { ThemeProvider } from "next-themes";

import Nav from "./Nav/Nav";
import Footer from "./Footer";
import { ApolloProvider } from "@apollo/client";
import client from "@/apollo-client";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
      >
        <div className="w-screen h-screen">
          <Nav />
          <main className="w-full flex justify-center min-h-mobilePage sm:min-h-page px-4 md:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default Layout;
