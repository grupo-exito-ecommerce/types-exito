declare var _default: {
    rgb: {
        to: {
            hsv: (rgb: any) => {
                h: number;
                s: number;
                v: number;
                a: any;
            };
            hex: (rgb: any) => string;
        };
    };
    hsv: {
        to: {
            rgb: (hsv: any) => {
                r: number;
                g: number;
                b: number;
                a: any;
            };
            hex: (hsv: any) => string;
        };
    };
    hex: {
        to: {
            rgb: (hex: any) => {
                r: number;
                g: number;
                b: number;
                a: number;
            };
            hsv: (hex: any) => {
                h: number;
                s: number;
                v: number;
                a: any;
            };
        };
    };
    any: {
        to: {
            rgb: (color: any) => any;
            hsv: (color: any) => any;
            hex: (color: any) => any;
        };
    };
    validateHex: (hex: any) => boolean;
};
export default _default;
