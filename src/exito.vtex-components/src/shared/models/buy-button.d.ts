export interface IconModel {
    styles: object;
    className: string;
    icon: string;
}
export interface BuyButton extends IconModel {
    text: string;
}
export interface Icons {
    more: IconModel;
    reduce: IconModel;
    delete: IconModel;
}
export interface StylesConfig {
    className: string;
    styles: object;
}
export interface BuyButtonConfig {
    QuantityContainer: StylesConfig;
    container: StylesConfig;
    buyButton: BuyButton;
    icons: Icons;
}
export declare enum ButtonType {
    productDetail = "product-details",
    productSummary = "product-summary",
    marketplaceList = "marketplace-list",
    shelf = "shelf"
}
export interface BuyButtonWrapperProps {
    buttonType: ButtonType;
    categoriesOpenCoverageModal: string[];
    productContext: any;
    hideBuyButtonOnCategories: string[] | undefined;
    buyButtonConfig: BuyButtonConfig | null;
}
