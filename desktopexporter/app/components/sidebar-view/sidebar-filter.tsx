import React from "react";
import { Input } from "@chakra-ui/react";

type SidebarFilterProps = {
  value: string;
  setValue: (value: string) => void;
};

export function SidebarFilter(props: SidebarFilterProps) {
  return (
    <Input
      type="search"
      placeholder="Filter"
      value={props.value}
      onChange={(event) => {
        props.setValue(event.target.value);
      }}
      onKeyDown={(event) => {
        // Stop this event from reaching `useKeyPress`
        event.stopPropagation();
      }}
    />
  );
}
