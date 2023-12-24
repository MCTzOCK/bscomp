/**
 * packages/components/src/Modal.tsx
 *
 * Author: Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright (c) 2018-2023 Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 24.12.2023
 *
 */

import * as React from "react";
import { ReactNode } from "react";
import {
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

export default function Modal(props: {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <>
      <ChakraModal
        isOpen={props.isOpen}
        onClose={props.onClose}
        size={["full", "full", "2xl"]}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent bgColor={"black"}>
          <ModalHeader fontWeight={900} color={"brand.500"} mt={"1rem"}>
            {props.title}
          </ModalHeader>
          <ModalCloseButton mt={"1rem"} />
          <ModalBody>{props.children}</ModalBody>
        </ModalContent>
      </ChakraModal>
    </>
  );
}
