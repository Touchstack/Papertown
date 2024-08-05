import { format } from "date-fns";

export const formatDatePretty = (dateString) => {
  const date = new Date(dateString);
  return format(date, "do MMM, yyyy");
};

export const formatDateISO = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};
