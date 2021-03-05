import React, { useState } from "react";
import { validateEmail } from "../../utils/helper";
import {
  Input,
  FormControl,
  FormLabel,
  Textarea,
  FormErrorMessage,
  FormHelperText,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Center,
  Button,
  useToast,
} from "@chakra-ui/react";

function Contact() {
  // set form state
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  // set initial error state
  const [errorMessage, setErrorMessage] = useState("");
  // the initial form state
  const { name, email, message } = formState;

  // the contact info that the user sent
  const handleSubmit = (event) => {
    // preventDefault is not working in React...
    event.preventDefault();
    // if no error message
    if (!errorMessage) {
      console.log("Form Send", formState);
      setFormState({ ...formState, name: "", email: "", message: "" });

      // cause preventDefault is not working in React, have to reset the form again
      document.getElementById("contact-form").reset();
      // document.querySelector('textarea[name="message"]').value = "";
      // display a successful message
      // return (
      //   <Alert status="success">
      //     <AlertIcon />
      //     Data uploaded to the server. Fire on!
      //   </Alert>
      // );
      // setErrorMessage("Thank you for your message!");
      return;
    }
    // if there is error message
    if (errorMessage) {
      // display a failed message
      setErrorMessage("Your contact info is NOT sent!");
      // cause preventDefault is not working in React, have to reset the form again
      document.getElementById("contact-form").reset();
      document.querySelector('textarea[name="message"]').value = "";
      return;
    }
  };

  // when user is typing and may receive feedback based on their inputs
  const handleChange = (event) => {
    if (event.target.name === "Email") {
      const isValid = validateEmail(event.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid!");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required!`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  };

  const toast = useToast();

  return (
    <section>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <FormControl id="your-name" isRequired>
            <FormLabel>Your Name</FormLabel>
            <Input
              variant="filled"
              placeholder="Your Name"
              maxW="md"
              defaultValue={name}
              onBlur={handleChange}
              type="text"
              name="Name"
            />
          </FormControl>
        </div>
        <div className="form-group">
          <FormControl id="your-email" mt="3" isRequired>
            <FormLabel>Your Email Address:</FormLabel>
            <Input
              variant="filled"
              placeholder="Your Email"
              maxW="md"
              defaultValue={email}
              onBlur={handleChange}
              type="email"
              name="Email"
            />
          </FormControl>
        </div>
        <div className="form-group">
          <FormControl id="your-message" mt="3">
            <FormLabel>Your Message:</FormLabel>
            <Textarea
              variant="filled"
              placeholder="Your Message"
              maxW="md"
              defaultValue={message}
              name="Message"
            />
          </FormControl>
        </div>
        {errorMessage && (
          <Alert status="error" maxW="md">
            <AlertIcon />
            <AlertTitle mr={2}>{errorMessage}</AlertTitle>
            <AlertDescription>Please check your inputs.</AlertDescription>
          </Alert>
        )}

        <Center maxW="md">
          <Button
            colorScheme="teal"
            variant="solid"
            type="submit"
            mt="3"
            onClick={() =>
              !errorMessage
                ? toast({
                    position: "bottom-left",
                    title: "Thank you!",
                    description: "Your message is sent",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                  })
                : undefined
            }
          >
            Submit
          </Button>
        </Center>
      </form>
    </section>
  );
}

export default Contact;
