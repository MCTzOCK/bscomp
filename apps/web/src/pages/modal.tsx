/**
 * apps/web/src/pages/modal.tsx
 *
 * Author: Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright (c) 2018-2023 Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 24.12.2023
 *
 */

import * as React from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import { Modal as BModal } from "bscomp";

export default function Modal() {
  const { isOpen, onOpen, onClose } = useDisclosure({
    defaultIsOpen: true,
  });
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <BModal title={"Modal"} isOpen={isOpen} onClose={onClose}>
        <p>Content</p>
      </BModal>
    </>
  );
}
