/// <reference types="react" />
import { BuyButtonConfig } from '../shared';
export declare const DEFAULT_BUTTON: BuyButtonConfig;
export declare const getProductCategories: (product: any) => string[];
export declare const validateIfNeedShowTheButton: (categories: string[], hideBuyButtonOnCategories: string[]) => boolean;
export declare const modalCanBeShown: (allowedCategories: string[], productCategories: string[], orderFormContext: any, sellerId: import("react").ReactText) => boolean;
