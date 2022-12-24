import { useMenuItem } from "@react-aria/menu";
import React from "react";
import { TreeState } from "@react-stately/tree";
import { Node } from "@react-types/shared";
import styled from "styled-components";

type MenuItemProps<T> = {
  item: Node<T>;
  state: TreeState<T>;
  onAction?: (key: React.Key) => void;
  onClose?: () => void;
  level?: number;
};
const StyledListItem = styled.li<{
  $isFocused?: boolean;
  $isDisabled?: boolean;
  $isPressed?: boolean;
  $level?: number;
}>`
  background: ${(props) => (props.$isPressed ? "gray" : "transparent")};
  color: ${(props) =>
    props.$isDisabled ? "gray" : props.$isFocused ? "white" : "white"};
  padding: 5px ${(props) => 25 * (props.$level ?? 1)}px;
  outline: none;
  cursor: pointer;
  text-align: left;
`;

export function MenuItem<T extends object>({
  state,
  item,
  level = 1,
}: MenuItemProps<T>) {
  const ref = React.useRef(null);
  const { menuItemProps, isFocused, isDisabled, isPressed } = useMenuItem(
    { key: item.key },
    state,
    ref
  );

  return (
    <StyledListItem
      {...menuItemProps}
      ref={ref}
      $isDisabled={isDisabled}
      $isFocused={isFocused}
      $isPressed={isPressed}
      $level={level}
    >
      {item.rendered}
    </StyledListItem>
  );
}
