import React, { useEffect } from "react";

const TOKEN_VALIDATE_URL = "http://159.223.232.167:8000/auth/verify-token";

const GetActiveUser = ({ setUsername }) => {
  useEffect(() => {
    const fetchActiveUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }
        const response = await fetch(TOKEN_VALIDATE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        const responseData = await response.json();
        console.log(responseData);
        const username = responseData["username"];
        setUsername(username); // Set the username passed via props
      } catch (error) {
        console.log("Error...", error);
      }
    };

    fetchActiveUser();
  }, [setUsername]); // Include setUsername in the dependency array

  return null; // Return null since this component doesn't render anything itself
};

export default GetActiveUser;
