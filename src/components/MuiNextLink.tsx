"use client";

import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';
import { forwardRef } from 'react';

// 将 MUI Link 和 Next.js Link 的 props 类型合并
type MuiNextLinkProps = Omit<MuiLinkProps, 'href' | 'classes'> &
  Pick<NextLinkProps, 'href' | 'as' | 'prefetch' | 'locale'>;

// 使用 forwardRef 来正确传递 ref
const MuiNextLink = forwardRef<HTMLAnchorElement, MuiNextLinkProps>(
  function MuiNextLink({ href, ...props }, ref) {
    return (
      <MuiLink
        component={NextLink}
        href={href}
        ref={ref}
        {...props}
      />
    );
  }
);

export default MuiNextLink;