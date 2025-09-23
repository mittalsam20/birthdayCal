import { resolve } from "path";

export const aliases = {
  "@": resolve(__dirname, "src"),

  "@utils": resolve(__dirname, "src/utils"),
  "@styles": resolve(__dirname, "src/styles"),
  "@routes": resolve(__dirname, "src/routes"),
  "@constants": resolve(__dirname, "src/constants"),
  "@components": resolve(__dirname, "src/UIComponents"),
  "@appComponents": resolve(__dirname, "src/appComponents"),
  "@svgComponents": resolve(__dirname, "src/svgComponents"),
};
