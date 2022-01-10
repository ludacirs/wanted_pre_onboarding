export const flexBox = (
  justify = "center",
  align = "center",
  direction = "row"
) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
`;
