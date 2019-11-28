/// <reference types="react" />
import { Fields } from '../../shared';
interface customDataAllies {
    fields: Fields;
}
interface customBenefitsAllies {
    name: string;
}
interface AlliesProps {
    data: customDataAllies[];
    productBenefits: customBenefitsAllies;
    action: string;
}
declare function Allies(props: AlliesProps): JSX.Element;
declare namespace Allies {
    var defaultProps: {
        action: string;
    };
}
export default Allies;
