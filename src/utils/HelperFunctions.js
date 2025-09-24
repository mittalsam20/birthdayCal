const colors = [
  "#545D79",
  "#8AB721",
  "#C77D99",
  "#78CAE3 ",
  "#E64A33",
  "#4A90E2", // Light blue
  "#7B68EE", // Medium blue
  "#87CEEB", // Sky blue
  "#FFB6C1", // Light pink
  "#98FB98", // Light green
  "#F0E68C", // Khaki
  "#FFA07A", // Light salmon
  "#DDA0DD", // Plum
  "#20B2AA", // Light sea green
  "#FF6347", // Tomato
  "#9370DB", // Medium purple
  "#32CD32", // Lime green
];

export const getNameInitials = ({ fullName = "" }) => {
  const names = fullName.split(" ");
  if (names.length === 0) return "";

  const firstNameInitial = names[0][0];
  const lastNameInitial = names[names.length - 1][0];
  return `${firstNameInitial}${lastNameInitial}`.toUpperCase();
};

export const getColorFromName = ({ name = "" }) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};
