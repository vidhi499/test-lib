import type { IMenuGroupProps, IMenuItemOptionProps, IMenuItemProps, IMenuOptionGroupProps, IMenuProps } from 'native-base';
import type { MutableRefObject } from 'react';
export declare type IMenuComponent = ((props: IMenuProps & {
    ref?: MutableRefObject<any>;
}) => JSX.Element) & {
    Item: React.MemoExoticComponent<(props: IMenuItemProps & {
        ref?: MutableRefObject<any>;
    }) => JSX.Element>;
    Group: React.MemoExoticComponent<(props: IMenuGroupProps & {
        ref?: MutableRefObject<any>;
    }) => JSX.Element>;
    ItemOption: React.MemoExoticComponent<(props: IMenuItemOptionProps & {
        ref?: MutableRefObject<any>;
    }) => JSX.Element>;
    OptionGroup: React.MemoExoticComponent<(props: IMenuOptionGroupProps & {
        ref?: MutableRefObject<any>;
    }) => JSX.Element>;
};
declare const Menu: IMenuComponent;
export { Menu };
export type { IMenuProps, IMenuItemProps, IMenuItemOptionProps, IMenuGroupProps, IMenuOptionGroupProps, } from 'native-base';
