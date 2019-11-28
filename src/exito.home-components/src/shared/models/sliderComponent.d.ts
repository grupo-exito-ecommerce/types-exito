export interface SliderComponentProps {
    children: any;
    autoplay: boolean;
    autoplaySpeed: number;
    height: string;
    banner: any[];
    showArrows: boolean;
    showDots: boolean;
    scroll: string;
    width: string;
    stylesSlide: {
        containerClass: string;
        containerDots: string;
    };
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}
