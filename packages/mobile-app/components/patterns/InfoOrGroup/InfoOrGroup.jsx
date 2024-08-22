import { Image, StyledText, Disclaimer } from "../../atoms";

export const InfoOrGroup = ({ imageProps, title, articleText }) => {
  return (
    <>
      <Image
        variant="fullWidth"
        withoutBorder
        marginBottom={10}
        {...imageProps}
      />
      <StyledText variant="subHeading" padding={10}>
        {title}
      </StyledText>
      <StyledText variant="body" opacity="lighter" padding={10}>
        {articleText}
      </StyledText>
      <Disclaimer disclaimerText="Seek a doctor’s advice in addition to using this app and before making any medical decisions." />
    </>
  );
};
