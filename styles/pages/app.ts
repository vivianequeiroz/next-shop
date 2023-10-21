import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  minHeight: "100vh",
  justifyContent: "center",
});

export const Header = styled("header", {
  display: "flex",
  gap: 16,
  alignItems: "center",
  padding: "2rem 0",
  maxWidth: 1100,
  margin: "0 auto",
});
