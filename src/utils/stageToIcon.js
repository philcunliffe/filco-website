export const stageToIcon = (status) => {
  if (status === "seedling") return "\u{1F331}";
  if (status === "budding") return "\u{1F33F}";
  if (status === "evergreen") return "\u{1F332}";
  return "";
};
