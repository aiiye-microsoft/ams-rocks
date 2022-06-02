import { container, title } from "styles/jss/nextjs-material-kit.js";

const landingPageStyle = {
  container: {
    zIndex: "4",
    color: "#FFFFFF",
    ...container,
  },
  containerBlack: {
    zIndex: "4",
    color: "#FFFFFF",
    backgroundColor: "#000000",
    ...container,
  },
  sectionBreak :{
    minHeight: "100px",
    color: "#FFFFFF"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    font: "SegoeUI !important",
    fontStyle: "normal !important",
    fontSize:"50px",
    fontWeight: "600",
    color: "#FFFFFF",
    textDecoration: "none !important",
    textDecorationStyle:"none !important"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainBlack: {
    background: "#000000",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "0px 0px 0px",
    //borderRadius: "6px",
    //boxShadow:
    //  "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
};

export default landingPageStyle;
