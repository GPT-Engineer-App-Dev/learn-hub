import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Heading, Text, Button, VStack } from "@chakra-ui/react";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    // Fetch course details from an API or static data
    const fetchCourseDetails = async () => {
      // Replace with actual API call
      const courseData = {
        id: courseId,
        title: "Sample Course",
        description: "This is a sample course description.",
      };
      setCourse(courseData);
    };

    fetchCourseDetails();
  }, [courseId]);

  const handleEnroll = () => {
    // Handle enrollment logic, e.g., API call to enroll the user
    setEnrolled(true);
  };

  if (!course) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container centerContent>
      <VStack spacing={4}>
        <Heading>{course.title}</Heading>
        <Text>{course.description}</Text>
        {enrolled ? (
          <Text>You are enrolled in this course.</Text>
        ) : (
          <Button colorScheme="teal" onClick={handleEnroll}>
            Enroll in Course
          </Button>
        )}
      </VStack>
    </Container>
  );
};

export default CourseDetails;