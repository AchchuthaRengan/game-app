import NavBar from "@/components/NavBar";
import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>    
      <NavBar />
      <main>
      <Box>
      {children}
      </Box>
      </main>      
    </>
  );
};

export default Layout;
