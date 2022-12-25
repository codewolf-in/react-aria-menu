import { useMenuSection } from "react-aria";
import { MenuItem } from "./MenuItem";
import type { Node } from "@react-types/shared";
import { TreeState } from "react-stately";
import styled from "styled-components";
import { useState } from "react";

type MenuSectionProps<T> = {
  section: Node<T>;
  state: TreeState<T>;
  onClose?: () => void;
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
  padding: 0px ${(props) => 25 * (props.$level ?? 1)}px;
  outline: none;
  cursor: pointer;
  text-align: left;
  :hover {
    background: "gray";
  }
`;

export function MenuSection<T extends object>({
  section,
  state,
}: MenuSectionProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const { itemProps, headingProps, groupProps } = useMenuSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });

  return (
    <>
      <StyledListItem
        {...itemProps}
        $level={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {section.rendered && (
          <span style={{ padding: "5px 25px" }} {...headingProps}>
            {section.rendered}
          </span>
        )}
        {isOpen && (
          <ul
            {...groupProps}
            style={{
              padding: 0,
              listStyle: "none",
            }}
          >
            {[...section.childNodes].map((item) => (
              <MenuItem key={item.key} item={item} state={state} level={2} />
            ))}
          </ul>
        )}
      </StyledListItem>
    </>
  );
}
