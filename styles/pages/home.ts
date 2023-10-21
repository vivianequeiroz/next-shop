import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  maxWidth: "calc(100vw - ((100vw - 1100px)/2))",
  marginLeft: "auto",
  minHeight: 656,
});

export const Product = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  background: "linear-gradient(100deg, #8A2BE2 0%, #FF69B4 100%)",
  borderRadius: 8,
  cursor: "pointer",
  position: "relative",

  img: {
    objectFit: "cover",
  },

  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "2rem",
    overflow: "hidden",
    borderRadius: 4,

    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",

    background: "rgba(0, 0, 0, 0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    strong: {
      fontSize: "$lg",
    },

    span: {
      fontSize: "$xg",
      fontWeight: "bold",
      color: "$green300",
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});
