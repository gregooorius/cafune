import { ReactNode } from "react";
import {
  Box,
  Image,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = [
  { children: "Bio", link: "" },
  { children: "Concerts", link: "concerts" },
  { children: "Projects", link: "" },
  { children: "Media", link: "" },
];

const NavLink = ({ children, link }: { children: ReactNode, link:string }) => (
  <Link
    // px={2}
    // py={1}
    // rounded={"md"}
    // _hover={{
    //   textDecoration: "none",
    //   bg: useColorModeValue("gray.200", "gray.700"),
    // }}
    to={link}
  >
    {children}
  </Link>
);

export function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("white", "white")} px={4}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Box boxSize="10%" p={5}>
            <Image src={require("../assets/cafune_polo.png")} alt="cafune" />
          </Box>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack  alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((text) => (
                <NavLink key={text.children} link={text.link}>
                  {text.children}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              ></MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((text) => (
                <NavLink key={text.children} link={text.link}>
                  {text.children}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
