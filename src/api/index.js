import axios from "axios";

export const baseURL = "https://papertown-api.onrender.com";

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

export const subNewsLetter = async (data) => {
  try {
    const res = await axios.post(`${baseURL}/api/newsletter`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (err) {
    console.error("Error during subcribing:", err);
    return err;
  }
};

export const getPrompt = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/prompts`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error reading prompt:", error);
    return error;
  }
};

export const createSubMissions = async (data) => {
  try {
    const res = await axios.post(`${baseURL}/api/writeup/create`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  } catch (err) {
    console.error("Error during subscribing:", err);
    return err;
  }
};

export const getPromptById = async (id) => {
  try {
    const res = await axios.get(`${baseURL}/api/prompts/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error reading prompt:", error);
    return error;
  }
};

export const getPromptByCategoryId = async (id) => {
  try {
    const res = await axios.get(`${baseURL}/api/filter/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error reading prompt:", error);
    return error;
  }
};

export const getCategoryListing = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/category/read`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data.data;
  } catch (error) {
    console.error("Error lising category:", error);
    return error;
  }
};
