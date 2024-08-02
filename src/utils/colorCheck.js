export const colorCheck = (reviewStatus) => {
  if (reviewStatus === "published") {
    return {
      color: "text-green-700",
      background: "bg-green-50",
    };
  } else if (reviewStatus === "pending review") {
    return {
      color: "text-orange-700",
      background: "bg-orange-50",
    };
  } else if (reviewStatus === "reviewed") {
    return {
      color: "text-blue-700",
      background: "bg-blue-50",
    };
  }
};
