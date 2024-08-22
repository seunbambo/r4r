import styled from "styled-components/native";

export const StyledImage = styled.Image`
  height: 100%;
  margin: 0 auto;
  width: 100%;
  display: flex;
  ${({ resizeMode }) => resizeMode && `resize-mode: ${resizeMode}`};
  border-radius: ${({ borderRadius, withoutBorder, theme }) => {
    const {
      borders: {
        radius: { none, default: defaultBorder },
      },
    } = theme;
    if (borderRadius) return `${borderRadius}px`;
    if (withoutBorder) return `${none}px`;
    return `${defaultBorder}px`;
  }};
`;

export const StyledView = styled.View``;

export const DefaultContainer = styled(StyledView)`
  padding: ${({ padding }) => padding ?? 5}px;
  height: ${({ height }) => height ?? 180}px;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
`;

export const LargeContainer = styled(StyledView)`
  padding: 5px;
  height: 124px;
  width: 165.5px;
`;

export const SmallContainer = styled(StyledView)`
  padding: 5px;
  height: 51px;
  width: 51px;
`;

export const FullWidthContainer = styled(StyledView)`
  padding: 0px;
  height: 237px;
  border-radius: ${({ theme }) => theme.borders.radius.none};
  width: 100%;
`;
