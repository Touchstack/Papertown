import axios from "axios"; 

export const baseURL = "https://papertown.onrender.com";

export const logInUser = async (data) => {
  try {
    const res = await axios.post(`${baseURL}/api/students/login`, data, {
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


export const submitNewsLetter = async (data) => {
  try {
    const res = await axios.post(`${baseURL}/api/newsletter`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (err) {
    console.error("Error during submitting news letter:", err);
    return err;
  }
};

export const getAllPrompt = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/prompts`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (err) {
    console.error("Error getting all propmt:", err);
    return err;
  }
};


export const createPrompt = async () => {
  try {
    const res = await axios.post(`${baseURL}/api/prompts/create`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (err) {
    console.error("Error creating propmt:", err);
    return err;
  }
};


export const getAllCategories = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/category/read`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (err) {
    console.error("Error creating propmt:", err);
    return err;
  }
};