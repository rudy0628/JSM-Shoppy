import React from 'react';
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	ColumnSeries,
	Legend,
	Category,
	Tooltip,
	DataLabel,
	LineSeries,
} from '@syncfusion/ej2-react-charts';

import {
	barCustomSeries,
	barPrimaryXAxis,
	barPrimaryYAxis,
} from '../../data/dummy';
import { Header } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Bar = () => {
	const { currentMode } = useStateContext();

	return (
		<div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
			<Header category="Chart" title="Olympic Medal Counts - RIO" />
			<div className="w-full">
				<ChartComponent
					id="charts"
					primaryXAxis={barPrimaryXAxis}
					primaryYAxis={barPrimaryYAxis}
					chartArea={{ border: { width: 0 } }}
					tooltip={{ enable: true }}
					background={currentMode === 'Dark' ? '33373e' : ''}
					legendSettings={{ background: 'white' }}
				>
					<Inject
						services={[
							ColumnSeries,
							Legend,
							Tooltip,
							DataLabel,
							LineSeries,
							Category,
						]}
					/>
					<SeriesCollectionDirective>
						{barCustomSeries.map((item, index) => (
							<SeriesDirective key={index} {...item} />
						))}
					</SeriesCollectionDirective>
				</ChartComponent>
			</div>
		</div>
	);
};

export default Bar;
