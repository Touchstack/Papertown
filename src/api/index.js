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
    const res = await axios.get(`${baseURL}/api/prompts`,{
      headers:{
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error reading prompt:", err);
    return err;
  }
}

export const getCategoryListing = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/category/read`,{
      headers:{
        "Content-Type": "application/json",
      },
    });
    return res.data.data;
  } catch (error) {
    console.error("Error lising category:", err);
    return err;
  }
}