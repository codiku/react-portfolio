import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { Box, Image } from "@chakra-ui/react";

export function ImageSlider({ imageList }) {
  const renderImages = () => {
    return imageList.map((imageLink) => {
      return (
        <Image
          src={imageLink}
          boxShadow="xl"
          borderRadius="xl"
          key={imageLink}
        />
      );
    });
  };
  const slider = (
    <Slide infinite={false} arrows={imageList.length > 1} autoplay={false}>
      {renderImages()}
    </Slide>
  );
  return (
    <>
      <Box w={350}>{slider}</Box>
    </>
  );
}
