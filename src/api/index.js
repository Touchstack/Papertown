// import axios from "axios";

// export const baseURL = "https://papertown.onrender.com"; {

// //export const logInUser = async (data) => {
// try {
//   const res = await axios.post(`${baseURL}/api/login`, data, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   if (!res.ok) {
//     throw new Error("Login failed");
//   }

//    return res.json();
// } catch (error) {
//   throw new Error("Login failed");
// }
// };

// class AuthService {
//   static async loginUser(credentials) {
//     try {
//       const response = await fetch("your_login_endpoint", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(credentials),
//       });

//       if (!response.ok) {
//         throw new Error("Login failed");
//       }

//       return response.json();
//     } catch (error) {
//       throw new Error("Login failed");
//     }
//   }
// }

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
