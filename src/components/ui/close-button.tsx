import { IconButton as ChakraIconButton, type ButtonProps } from '@chakra-ui/react';
import { LuX } from 'react-icons/lu';
import * as React from 'react';

export type CloseButtonProps = ButtonProps;

export const CloseButton = React.forwardRef<HTMLButtonElement, CloseButtonProps>(function CloseButton(props, ref) {
  return (
    <ChakraIconButton variant="ghost" aria-label="Close" ref={ref} {...props}>
      {props.children ?? <LuX />}
    </ChakraIconButton>
  );
});
