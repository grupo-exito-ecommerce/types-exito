import { ProductPricesComponent } from '../../shared';
/**
 * Validations for the scenario one
 * @param props
 * @description Scenario 1: The product only have listPrice and sellingPrice,
 * @description Scenario 2: The product have the same discount, so much of allies and commercial
 * @description Scenario 3: The product have the commercial discount mayor of the discount of allies
 */
export declare const validateScenarioOne: (props: ProductPricesComponent) => true | null;
