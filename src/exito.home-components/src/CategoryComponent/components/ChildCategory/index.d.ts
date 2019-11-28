/// <reference types="react" />
import { ChildCategoryItem } from '../../models/models';
interface Props {
    childCategory: ChildCategoryItem[];
    params: string;
}
declare function ChildCategory(props: Props): JSX.Element | null;
export default ChildCategory;
