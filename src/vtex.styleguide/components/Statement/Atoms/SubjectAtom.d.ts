import React from 'react';
import { VerbOption } from './VerbAtom';
export declare type SubjectOptions = {
    [key: string]: {
        group?: string;
        label: string;
        unique?: boolean;
        verbs: VerbOption[];
    };
};
declare type Props = {
    subject?: string;
    onChange: (string: any) => void;
    options: SubjectOptions;
    placeholder: string;
    isFullWidth: boolean;
};
declare const SubjectAtom: React.FC<Props>;
export default SubjectAtom;
