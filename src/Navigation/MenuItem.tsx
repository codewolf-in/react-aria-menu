import { useMenuItem } from "@react-aria/menu";
import React from "react";

export default function MenuItem({ item, state }: any) {
  let ref = React.useRef(null);
  let { menuItemProps, isFocused, isSelected, isDisabled } = useMenuItem(
    { key: item.key },
    state,
    ref
  );

  return (
    <li
      {...menuItemProps}
      ref={ref}
      style={{
        background: isFocused ? "gray" : "transparent",
        color: isDisabled ? "gray" : isFocused ? "white" : "black",
        padding: "2px 5px",
        outline: "none",
        cursor: "default",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {item.rendered}
      {isSelected && <span aria-hidden="true">✅</span>}
    </li>
  );
}
