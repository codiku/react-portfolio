import React, { useRef, useState } from "react";
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
  Box,
} from "@chakra-ui/react";
export const ImageSlider = ({ imgList }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderModalRef = useRef();

  const openImg = (img, i) => {
    console.log("*** SET CURRENT INDEX", i);
    setCurrentIndex((index) => i);
    onOpen();
  };

  console.log("CURRENT INDEX POUR ", imgList, " est ", currentIndex);

  return (
    <>
      <Box style={{ width: 350 }} boxShadow="xl">
        <Slide
          autoplay={false}
          arrows={imgList.length > 1}
          onChange={(_, to) => {
            setCurrentIndex(to);
          }}
        >
          {imgList.map((img, i) => {
            return (
              <Box
                borderRadius={"xl"}
                onClick={() => openImg(img, i)}
                key={img}
                style={{
                  backgroundSize: "cover",
                  height: 230,
                  width: 350,
                  backgroundImage: `url(${img})`,
                }}
              />
            );
          })}
        </Slide>
      </Box>
      <Modal
        bg="transparent"
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent
          boxShadow={"none"}
          bg="transparent"
          height={{ base: 90, md: 750 }}
          minW={{ base: 200, md: 1000 }}
        >
          <ModalCloseButton
            backgroundColor="white"
            borderColor={"black"}
            borderWidth={2}
            mt={-2}
            zIndex={100}
            onClick={() => setCurrentIndex(0)}
          />

          <ModalBody>
            {currentIndex !== undefined && (
              <Slide
                autoplay={false}
                defaultIndex={currentIndex}
                ref={sliderModalRef}
                arrows={imgList.length > 1}
              >
                {imgList.map((img, i) => {
                  return (
                    <Box
                      onClick={() => openImg(img, i)}
                      key={img}
                      height={{ base: 300, md: 650 }}
                      style={{
                        backgroundSize: "cover",

                        //  backgroundColor: "blue",
                        backgroundImage: `url(${img})`,
                      }}
                    />
                  );
                })}
              </Slide>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
