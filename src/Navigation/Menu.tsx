import React from "react";
import { MenuItem } from "./MenuItem";
import { useMenu } from "@react-aria/menu";
import { useTreeState } from "react-stately";
import { MenuSection } from "./MenuSection";
import { AriaMenuProps } from "@react-types/menu";

interface MenuProps<T extends object> extends AriaMenuProps<T> {
  onClose?: () => void;
}

export function Menu<T extends object>({ ...props }: MenuProps<T>) {
  const state = useTreeState(props);
  const ref = React.useRef(null);
  const { menuProps } = useMenu(
    { ...props, "aria-label": props["aria-label"] },
    state,
    ref
  );

  return (
    <ul
      {...menuProps}
      ref={ref}
      style={{
        listStyle: "none",
        width: "100%",
        maxWidth: "max-content",
        backgroundColor: "blue",
        padding: 0,
      }}
    >
      {Array.from(state.collection).map((item) => {
        return (
          <>
            {item.type === "section" ? (
              <MenuSection key={item.key} section={item} state={state} />
            ) : (
              <MenuItem key={item.key} item={item} state={state} />
            )}
          </>
        );
      })}
    </ul>
  );
}
