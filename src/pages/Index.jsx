import { Container, Text, VStack, Box, Heading, Button, Flex } from "@chakra-ui/react";
import { FaCode, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to CodeMaster
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Your ultimate platform to learn coding online. Start your journey with us today!
        </Text>
        <Flex direction="column" align="center" justify="center" width="100%">
          <Button leftIcon={<FaCode />} colorScheme="teal" size="lg" mb={4}>
            Start Learning
          </Button>
          <Button leftIcon={<FaLaptopCode />} colorScheme="blue" size="lg" mb={4}>
            Browse Courses
          </Button>
          <Button leftIcon={<FaChalkboardTeacher />} colorScheme="purple" size="lg">
            Meet Our Instructors
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;