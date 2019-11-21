import PropTypes from 'prop-types';
import React from 'react';
declare const propTypes: {
    steps: PropTypes.Validator<string[]>;
    danger: PropTypes.Requireable<boolean>;
    slim: PropTypes.Requireable<boolean>;
    percent: PropTypes.Validator<number>;
    type: PropTypes.Requireable<string>;
};
declare const Progress: React.FC<PropTypes.InferProps<typeof propTypes>>;
export default Progress;
