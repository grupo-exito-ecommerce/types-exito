/// <reference types="react" />
export declare const TABLE_HEADER_HEIGHT = 36;
export default function useTableMeasures({ size, density, }: MeasuresInput): {
    selectedDensity: Density;
    rowHeight: number;
    tableHeight: number;
    setSelectedDensity: import("react").Dispatch<import("react").SetStateAction<Density>>;
};
export declare type MeasuresInput = {
    size: number;
    density: Density;
};
export declare function calculateTableHeight(rowHeight: number, tableSize: number): number;
export declare function getScrollbarWidth(): number;
export declare enum Density {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high"
}
export declare enum DesitySizes {
    low = 76,
    medium = 48,
    high = 32
}
export declare const DENSITY_OPTIONS: Density[];
export declare function getRowHeight(density: Density): number;
