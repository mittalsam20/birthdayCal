import { TILE_COLORS } from "@constants/colorConstants";

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
  return TILE_COLORS[Math.abs(hash) % TILE_COLORS.length];
};
