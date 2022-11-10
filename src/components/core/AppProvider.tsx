import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { theme as defaultTheme } from '../../theme';
import { custom } from '../../theme/custom';

export const appTheme = extendTheme(defaultTheme);
export const AppProvider = ({ children, theme, ...props }: any) => {
  return (
    <NativeBaseProvider
      theme={extendTheme(defaultTheme, custom, theme)}
      {...props}
    >
      {children}
    </NativeBaseProvider>
  );
};
