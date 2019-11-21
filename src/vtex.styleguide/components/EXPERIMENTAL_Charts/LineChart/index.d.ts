import { FC } from 'react';
import { TooltipFormatter } from 'recharts';
interface Props {
    data: any;
    dataKeys: string[];
    xAxisKey: string;
    schema: ChartProps;
    formatter: TooltipFormatter;
}
declare const LineChart: FC<Props>;
export default LineChart;
