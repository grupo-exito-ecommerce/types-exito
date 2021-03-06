import PropTypes from 'prop-types';
import { FC } from 'react';
import { Position, Size } from './TooltipPopup';
import { Trigger } from './hooks';
declare const propTypes: {
    /** Label to be shown. As element, can be a string, number...*/
    label: PropTypes.Validator<PropTypes.ReactNodeLike>;
    /** Tooltip position */
    position: PropTypes.Requireable<Position>;
    /** Tooltip font size */
    size: PropTypes.Requireable<Size>;
    /** Fallback position. Used when the tooltip cannot be shown in the original position */
    fallbackPosition: PropTypes.Requireable<Position>;
    /** Event to trigger the tooltip */
    trigger: PropTypes.Requireable<Trigger>;
    /** Element that will trigger the event */
    children: PropTypes.Validator<PropTypes.ReactElementLike>;
    /** Delay to show and hide the tooltip (ms) */
    delay: PropTypes.Requireable<number>;
    /** Tooltip animation duration (ms) */
    duration: PropTypes.Requireable<number>;
    /** Tooltip timming function used to animate the tooltip */
    timmingFn: PropTypes.Requireable<string>;
};
declare type Props = PropTypes.InferProps<typeof propTypes>;
declare const Tooltip: FC<Props>;
export default Tooltip;
