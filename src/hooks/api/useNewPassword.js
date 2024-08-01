import { useMutation } from "@tanstack/react-query";

export const useNewPassword = (onSuccess, onError) => {
  const url = async (body) => {
    try {
      const response = await fetch(
        `https://api.papertownimaginarium.org/api/auth/change-password`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        throw new Error(`${await response.text()}`);
      }

      return response.json();
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  };
  return useMutation({
    mutationFn: url,
    onSuccess,
    onError,
  });
};
