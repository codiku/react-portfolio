import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./style.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
export const ImageSlider = ({ imgList }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentImg, setCurrentImg] = useState();
  const openImg = (img) => {
    setCurrentImg(img);
    onOpen();
  };
  const renderImage = (img, h, w) => {
    return (
      <div
        onClick={() => openImg(img)}
        style={{
          backgroundSize: "cover",
          height: h || 230,
          width: w,
          backgroundImage: `url(${img})`,
        }}
      />
    );
  };

  return (
    <>
      <div style={{ width: 350 }}>
        <Slide autoplay={false}>
          {imgList.map((img) => {
            return renderImage(img);
          })}
        </Slide>
      </div>
      <Modal
        bg="transparent"
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent bg="transparent" h={500} minW={800}>
          <ModalCloseButton />
          <ModalBody
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(${currentImg})`,
            }}
          ></ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
