/// <reference types="react" />
interface ITotalProducts {
    maxItemsPerPage: number;
    numberOfAttempt: number;
    className: string;
    showCurrentTotalProducts: boolean;
}
declare const TotalProducts: {
    (props: ITotalProducts): JSX.Element | null;
    defaultProps: {
        maxItemsPerPage: number;
        numberOfAttempt: number;
        className: string;
        showCurrentTotalProducts: boolean;
    };
};
export default TotalProducts;
