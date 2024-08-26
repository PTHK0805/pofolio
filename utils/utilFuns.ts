import React, { Dispatch, SetStateAction } from "react";

export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const handleScroll = (id: string, e: React.MouseEvent, setIsOpen?: Dispatch<SetStateAction<boolean>>) => {
  e.stopPropagation();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth'});
    element.style.scrollMarginTop = '4rem';
  }
  if (setIsOpen) {
    setIsOpen(false);
  }
};