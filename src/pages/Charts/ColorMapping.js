import React from 'react';
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	ColumnSeries,
	Category,
	Tooltip,
	Legend,
	RangeColorSettingsDirective,
	RangeColorSettingDirective,
} from '@syncfusion/ej2-react-charts';

import {
	colorMappingData,
	ColorMappingPrimaryXAxis,
	ColorMappingPrimaryYAxis,
	rangeColorMapping,
} from '../../data/dummy';
import { Header } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const ColorMapping = () => {
	const { currentMode } = useStateContext();

	return (
		<div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
			<Header category="Chart" title="Color Mapping" />
			<div className="w-full">
				<ChartComponent
					id="charts"
					primaryXAxis={ColorMappingPrimaryXAxis}
					primaryYAxis={ColorMappingPrimaryYAxis}
					chartArea={{ border: { width: 0 } }}
					legendSettings={{ mode: 'Range', background: 'white' }}
					tooltip={{ enable: true }}
					background={currentMode === 'Dark' ? '#33373e' : ''}
				>
					<Inject services={[ColumnSeries, Legend, Tooltip, Category]} />
					<SeriesCollectionDirective>
						<SeriesDirective
							dataSource={colorMappingData[0]}
							xName="x"
							type="Column"
							yName="y"
							name="USA"
							cornerRadius={{
								topLeft: 10,
								topRight: 10,
							}}
						/>
					</SeriesCollectionDirective>
					<RangeColorSettingsDirective>
						{rangeColorMapping.map((item, index) => (
							<RangeColorSettingDirective key={index} {...item} />
						))}
					</RangeColorSettingsDirective>
				</ChartComponent>
				;
			</div>
		</div>
	);
};

export default ColorMapping;
