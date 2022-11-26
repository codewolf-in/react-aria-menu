import React from "react";
import MenuItem from "./MenuItem";
import { useMenu } from "@react-aria/menu";
import { useTreeState } from "@react-stately/tree";

function NavigationMenu(props: any) {
  let state = useTreeState(props);
  let ref = React.useRef(null);
  let { menuProps } = useMenu(props, state, ref);

  return (
    <ul
      {...menuProps}
      ref={ref}
      style={{
        margin: 0,
        padding: 0,
        listStyle: "none",
        width: 150,
      }}
    >
      {Array.from(state.collection).map((item) => (
        <MenuItem key={item.key} item={item} state={state} />
      ))}
    </ul>
  );
}
