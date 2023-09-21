import { useUser } from "@auth0/nextjs-auth0/client";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }
  return (
    <Box>
      <Text color="white">LOGIN</Text>
      <a href="/api/auth/login" color="white">
        Login
      </a>
    </Box>
  );
};

export default page;
