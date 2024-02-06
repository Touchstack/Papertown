import axios from "axios"; 

export const baseURL = "https://papertown.onrender.com";

export const logInUser = async (data) => {
  try {
    const res = await axios.post(`${baseURL}/api/login`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (err) {
    console.error("Error during Login:", err);
    return err;
  }
};


export const createUser = async (data) => {
  try {
    const res = await axios.post(`${baseURL}/api/students/create`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (err) {
    console.error("Error during Login:", err);
    return err;
  }
};
