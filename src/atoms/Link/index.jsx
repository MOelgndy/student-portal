//TODO: Remove if unused
import NextLink from 'next/link';

import { link } from './style.module.css';

/*
title: ""
variant: contained | text | outlined
color: primary | secondary | success | error | warning | info
startIcon
endIcon
disabled: boolean
onClick: ()=>{}
active: boolean
href: ""
target:""
download
*/

export const Link = ({
  children,
  title,
  variant = 'contained',
  color = 'primary',
  startIcon,
  endIcon,
  disabled,
  onClick = () => {},
  active,
  target = '_self',
  href = '#',
  download,
}) => {
  return (
    <NextLink
      className={link}
      title={title}
      data-variant={variant}
      data-color={color}
      data-disabled={disabled}
      onClick={onClick}
      data-active={active}
      target={target}
      href={href}
      download={download}
    >
      {startIcon && startIcon}

      {children && children}

      {endIcon && endIcon}
    </NextLink>
  );
};
