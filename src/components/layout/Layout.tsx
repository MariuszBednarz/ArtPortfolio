"use client";
import { ThemeProvider } from "next-themes";
import { ApolloProvider } from "@apollo/client";

import client from "@/apollo-client";

import Nav from "./Nav/Nav";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
      >
        <div className="w-page h-auto">
          <Nav />
          <main className="w-full h-full min-h-mobilePage sm:min-h-page bg-white dark:bg-darker">
            {children}
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default Layout;
