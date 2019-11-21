import { FC } from 'react';
import { InputSearchProps } from './InputSearch';
import { InputCustomProps } from './InputCustom';
interface Composites {
    InputSearch: FC<InputSearchProps>;
    ButtonGroup: FC;
    UNSAFE_InputCustom: FC<InputCustomProps>;
}
declare const Toolbar: FC & Composites;
export default Toolbar;
