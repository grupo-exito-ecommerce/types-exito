declare const _default: ({
    name: string;
    email: string;
    number: number;
    country: string;
    children?: undefined;
} | {
    name: string;
    email: string;
    country: string;
    children: ({
        name: string;
        email: string;
        country: string;
        children?: undefined;
    } | {
        name: string;
        email: string;
        country: string;
        children: ({
            name: string;
            email: string;
            country: string;
            children?: undefined;
        } | {
            name: string;
            email: string;
            country: string;
            children: {
                name: string;
                email: string;
                country: string;
            }[];
        })[];
    })[];
    number?: undefined;
})[];
export default _default;
