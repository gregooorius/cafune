import {
  Stack,
  Flex,
  Button,
  Text,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";

export function Hero() {
  return (
    <div>
      <HStack
        w={"full"}
        justify={"space-between"}
        align={"space-between"}
        padding={10}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Stack maxW={"50%"} ml={20} align={"flex-start"} spacing={4}>
          {/* <Text
            color={"black"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Cafuné
          </Text>
          <Text
            color={"black"}
            fontWeight={400}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "1xl", md: "2xl" })}
          >
            „Latin-amerikai boldogság és édes melankólia”
          </Text>
          <Stack direction={"row"}>
            <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              Koncertek
            </Button>
            <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              Média
            </Button>
          </Stack> */}
        </Stack>
        {/* <Stack maxW={"35%"} mr={20} align={"flex-end"} alignSelf={"center"}>
          <Text
            as={"i"}
            color={"black"}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "1xl", md: "2xl" })}
          >
            Pezsgés, elegancia, virtuozitás, szabadság, melankólia, vidámság, ez
            a Cafuné! A Cafuné zenekar második lemezén nemzetközi szinten is
            ritkán hallható brazil muzsika hallható.
          </Text>
        </Stack> */}
      </HStack>
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={require("../assets/cafune.JPG")}
        backgroundSize={"contain"}
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
      />
    </div>
  );
}
