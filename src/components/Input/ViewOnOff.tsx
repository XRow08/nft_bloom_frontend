"use client";
import { useState } from "react";
import { View } from "../Icon/View";
import { ViewOff } from "../Icon/ViewOff";

type Props = {
  onChange?: any;
  checked: any;
  onClick?: any;
};

export function ViewOnOff({ checked, onChange }: Props) {
  return (
    <label className="cursor-pointer h-full flex justify-center items-center">
      <input
        className="sr-only peer"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {checked && <ViewOff />}
      {!checked && <View />}
    </label>
  );
}
