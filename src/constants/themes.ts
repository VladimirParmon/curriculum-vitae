import { MyTheme } from "./models";

export const lightTheme: MyTheme = {
  background: "#FFFFFF",
  color: "#404040",
  profilePhoto: "assets/photo-light.jpg",
  profilePhotoAlign: "flex-end",
  bgImage: "assets/background.jpg",
  bgImageWide: "assets/photo-wide-light.jpg",
  idle: "#efefef",
  accent: "#404040",
};

export const darkTheme: MyTheme = {
  background: "rgb(14, 14, 14)",
  color: "rgba(255, 255, 255, 0.8)",
  profilePhoto: "assets/photo-dark.jpg",
  profilePhotoAlign: "flex-start",
  bgImage: "assets/background.jpg",
  bgImageWide: "assets/photo-wide-dark.jpg",
  idle: "#efefef",
  accent: "rgb(27, 202, 205)",
};
