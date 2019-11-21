import { FC } from 'react';
import { InferProps } from 'prop-types';
import { filterBarPropTypes } from '../FilterBar/index.js';
declare const FilterBar: FC<FilterBarProps>;
declare type FilterBarProps = InferProps<typeof filterBarPropTypes>;
export default FilterBar;
