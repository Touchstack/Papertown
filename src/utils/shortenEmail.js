export const shortenEmail = (email) => {
  if (!email) return;
  const [localPart, domain] = email.split("@");
  const maskedLocalPart =
    localPart.slice(0, 3) + "*".repeat(localPart.length - 3);
  return `${maskedLocalPart}@${domain}`;
};
