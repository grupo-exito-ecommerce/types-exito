/// <reference types="react" />
import { SingleValueProps } from 'react-select/src/components/SingleValue';
import { OptionType } from '../model';
declare function SingleValue(props: SingleValueProps<OptionType>): JSX.Element;
declare namespace SingleValue {
    var propTypes: any;
}
export default SingleValue;
