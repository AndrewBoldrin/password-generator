export const shuffle = (text: string) =>
  [...text].sort(() => Math.random() - 0.5).join("");
