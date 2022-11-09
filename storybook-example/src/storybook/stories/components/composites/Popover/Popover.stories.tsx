import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Popover.args';

import React from 'react';
import { Popover, Button, Box } from 'components';

const PopoverTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Popover
        trigger={(triggerProps: any) => {
          return (
            <Button {...triggerProps} colorScheme="danger">
              Delete Customer
            </Button>
          );
        }}
      >
        <Popover.Content accessibilityLabel="Delete Customerd" w="56">
          <Popover.Arrow />
          <Popover.CloseButton />
          <Popover.Header>Delete Customer</Popover.Header>
          <Popover.Body>
            This will remove all data relating to Alex. This action cannot be
            reversed. Deleted data can not be recovered.
          </Popover.Body>
          <Popover.Footer justifyContent="flex-end">
            <Button.Group space={2}>
              <Button colorScheme="coolGray" variant="ghost">
                Cancel
              </Button>
              <Button colorScheme="danger">Delete</Button>
            </Button.Group>
          </Popover.Footer>
        </Popover.Content>
      </Popover>
    </Wrapper>
  );
};

export const PopoverComponent = PopoverTest.bind({});

export default {
  title: 'composites/Popover',
  component: PopoverComponent,
  argTypes: StorybookArgs,
};
