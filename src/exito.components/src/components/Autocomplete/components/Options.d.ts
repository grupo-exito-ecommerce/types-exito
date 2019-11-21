/// <reference types="react" />
import { OptionType } from '../model';
import { OptionProps } from 'react-select/lib/components/Option';
declare function Option(props: OptionProps<OptionType>): JSX.Element;
declare namespace Option {
    var propTypes: any;
}
export default Option;
