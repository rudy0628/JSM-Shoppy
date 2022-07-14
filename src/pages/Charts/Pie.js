import React from 'react';

import { pieChartData } from '../../data/dummy';
import Doughnut from '../../components/Charts/Pie';
import { Header } from '../../components';

const Pie = () => {
	return (
		<div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
			<Header category="Chart" title="Pie" />
			<div className="w-full">
				<Doughnut
					id="chart-pie"
					data={pieChartData}
					legendVisibility
					height="full"
				/>
			</div>
		</div>
	);
};

export default Pie;
