import React from 'react';

import {
	AccumulationChartComponent,
	AccumulationSeriesCollectionDirective,
	AccumulationSeriesDirective,
	Inject,
	AccumulationLegend,
	PyramidSeries,
	AccumulationTooltip,
	AccumulationDataLabel,
} from '@syncfusion/ej2-react-charts';

import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const Pyramid = () => {
	const { currentMode } = useStateContext();

	return (
		<div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
			<Header category="Chart" title="Pyramid" />
			<div className="w-full">
				<AccumulationChartComponent
					id="charts"
					legendSettings={{ background: 'white' }}
					tooltip={{ enable: true }}
					background={currentMode === 'Dark' ? '#33373e' : ''}
				>
					<Inject
						services={[
							AccumulationLegend,
							PyramidSeries,
							AccumulationTooltip,
							AccumulationDataLabel,
						]}
					/>
					<AccumulationSeriesCollectionDirective>
						<AccumulationSeriesDirective
							dataSource={PyramidData}
							xName="x"
							yName="y"
							type="Pyramid"
							name="Food"
							width="45%"
							height="80%"
							neckWidth="15%"
							gapRatio={0.03}
							explode
							emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
							dataLabel={{
								visible: true,
								position: 'Inside',
								name: 'text',
							}}
						/>
					</AccumulationSeriesCollectionDirective>
				</AccumulationChartComponent>
			</div>
		</div>
	);
};

export default Pyramid;
