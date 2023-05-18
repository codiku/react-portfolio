import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";

export function ImageSlider({ imageList }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImg = (i) => {
    setCurrentIndex(i);
    setIsModalOpen(true);
  };

  const renderImages = () => {
    return imageList.map((imageLink, i) => {
      return (
        <Image
          src={imageLink}
          boxShadow="xl"
          borderRadius="xl"
          key={imageLink}
          onClick={() => openImg(i)}
        />
      );
    });
  };
  const slider = (
    <Slide infinite={false} arrows={imageList.length > 1} autoplay={false}>
      {renderImages()}
    </Slide>
  );

  const modalSlider = (
    <Modal
      closeOnOverlayClick={true}
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      size="6xl"
    >
      <ModalOverlay />
      <ModalContent bg="transparent" boxShadow={"none"}>
        <ModalCloseButton
          backgroundColor="white"
          borderColor={"black"}
          borderWidth={2}
          mt={-2}
          zIndex={10}
          onClick={() => setCurrentIndex(0)}
        />

        <ModalBody justifyContent={"center"} alignItems={"center"} flex>
          {currentIndex !== undefined && (
            <Slide
              autoplay={false}
              defaultIndex={currentIndex}
              arrows={imageList.length > 1}
            >
              {renderImages()}
            </Slide>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );

  return (
    <>
      <Box w={350}>{slider}</Box>
      {modalSlider}
    </>
  );
}
