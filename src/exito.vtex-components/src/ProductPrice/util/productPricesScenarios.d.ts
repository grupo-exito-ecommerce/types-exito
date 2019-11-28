import { DistributionComponents, ProductPricesComponent, PriceProps } from '../../shared';
import { ComponentsClasses } from 'types-exito/src/exito.components/src/shared';
interface MarketplaceScenarioProps extends PriceProps {
    listPrice?: number;
    sellingPrice?: number;
}
/**
 * Scenario Marketplace, the product only show listPrice and selling price or only listPrice
 */
export declare const scenarioMarketplace: ({ props, classesToUse, showScenarios }: {
    props: MarketplaceScenarioProps;
    classesToUse: ComponentsClasses;
    showScenarios: boolean;
}) => DistributionComponents[] | null;
/**
 * @param props
 * @param classesToUse
 * Return the price with the next scenarios
 * @description Scenario 1: The product only have listPrice and sellingPrice,
 * @description Scenario 2: The product have the same discount, so much of allies and commercial
 * @description Scenario 3: The product have the commercial discount mayor of the discount of allies
 */
export declare const scenarioOne: (props: ProductPricesComponent, classesToUse: ComponentsClasses, showScenarios: boolean) => DistributionComponents[] | null;
/**
 * Return the price with the next scenarios
 * @description Scenario 1: The product only have listPrice and alliesPrices, show the allies prices in red
 * and the listPrices width underline.
 * @description Scenario 2: The product have listPrice, sellingPrice and alliesPrice,
 *  show the allies price in red and the sellingPrice with black and the text 'others'
 */
export declare const scenarioTwo: ({ props, classesToUse, showScenarios }: {
    props: ProductPricesComponent;
    classesToUse: ComponentsClasses;
    showScenarios: boolean;
}) => DistributionComponents[] | null;
/**
 * Return the scenario to use
 * @param props
 * @param classesToUse
 */
export declare const getScenario: ({ props, classesToUse, showScenarios }: {
    props: ProductPricesComponent | null;
    classesToUse: ComponentsClasses;
    showScenarios: boolean;
}) => DistributionComponents[] | null;
export {};
