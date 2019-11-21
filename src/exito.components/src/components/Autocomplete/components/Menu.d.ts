/// <reference types="react" />
import { MenuProps } from 'react-select/src/components/Menu';
import { OptionType } from '../model';
declare const Menu: {
    (props: MenuProps<OptionType>): JSX.Element;
    propTypes: any;
};
export default Menu;
