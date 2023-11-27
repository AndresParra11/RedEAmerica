import axios from "axios";

const getUser = async (user) => {
  try {
    const response = await axios.get(
      "https://back-redeamerica-production.up.railway.app/auth/login",
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          email: user.email,
          password: user.password,
        },
        data: {
          email: user.email,
          password: user.password,
        },
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error:", error);
    return "Error: " + error;
  }
};

export default getUser;
