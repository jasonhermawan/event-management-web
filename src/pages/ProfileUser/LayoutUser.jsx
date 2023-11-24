import Sidebar from "../../components/SidebarDash/Sidebar";
import { Flex } from "@chakra-ui/react";

export default function LayoutUser(props) {
  return (
    <>
      <Sidebar />
      <Flex  >
       {props.children}
      </Flex>
    </>
  );
}
