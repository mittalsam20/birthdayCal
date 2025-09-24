import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = resolve(fileURLToPath(import.meta.url), "..");

export const aliases = {
  "@": resolve(__dirname, "src"),
  "@utils": resolve(__dirname, "src/utils"),
  "@styles": resolve(__dirname, "src/styles"),
  "@config": resolve(__dirname, "src/config"),
  "@routes": resolve(__dirname, "src/routes"),
  "@constants": resolve(__dirname, "src/constants"),
  "@components": resolve(__dirname, "src/UIComponents"),
  "@appComponents": resolve(__dirname, "src/appComponents"),
  "@svgComponents": resolve(__dirname, "src/svgComponents"),

  "@CssBattles": resolve(__dirname, "src/routes/CssBattles"),
  "@BirthdayCal": resolve(__dirname, "src/routes/BirthdayCal"),
};
