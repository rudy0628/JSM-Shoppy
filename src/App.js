import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from './contexts/ContextProvider';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components/index';
import {
	Ecommerce,
	Orders,
	Calendar,
	Employees,
	Stacked,
	Pyramid,
	Customers,
	Kanban,
	Area,
	Bar,
	Pie,
	Financial,
	ColorPicker,
	ColorMapping,
	Editor,
	Line,
} from './pages/index';
import './App.css';

const App = () => {
	const {
		activeMenu,
		setThemeSettings,
		themeSettings,
		currentColor,
		currentMode,
		setCurrentColor,
		setCurrentMode,
	} = useStateContext();

	useEffect(() => {
		const currentThemeColor = localStorage.getItem('colorMode');
		const currentThemeMode = localStorage.getItem('themeMode');
		if (currentThemeColor && currentThemeMode) {
			setCurrentColor(currentThemeColor);
			setCurrentMode(currentThemeMode);
		}
	}, [setCurrentColor, setCurrentMode]);

	return (
		<div className={currentMode === 'Dark' ? 'dark' : ''}>
			<BrowserRouter>
				<div className="flex relative dark:bg-main-dark-bg">
					{/* Setting Button */}
					<div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
						<TooltipComponent content="Settings" position="Top">
							<button
								type="button"
								className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
								onClick={() => setThemeSettings(true)}
								style={{ backgroundColor: currentColor, borderRadius: '50%' }}
							>
								<FiSettings />
							</button>
						</TooltipComponent>
					</div>

					{/* Sidebar */}
					{activeMenu ? (
						<div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
							<Sidebar />
						</div>
					) : (
						<div className="w-0 dark:bg-secondary-dark-bg">
							<Sidebar />
						</div>
					)}

					{/* Main */}
					<div
						className={`dark:bg-main-dark-bg bg-main-bg min-h-screen ${
							activeMenu ? 'md:ml-72' : 'flex-2'
						} w-full`}
					>
						{/* Navbar */}
						<div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
							<Navbar />
						</div>

						{/* Pages */}
						<div>
							{themeSettings && <ThemeSettings />}

							<Routes>
								{/* Dashboard */}
								<Route path="/" element={<Ecommerce />} />
								<Route path="/ecommerce" element={<Ecommerce />} />

								{/* Pages */}
								<Route path="/orders" element={<Orders />} />
								<Route path="/employees" element={<Employees />} />
								<Route path="/customers" element={<Customers />} />

								{/* Apps */}
								<Route path="/kanban" element={<Kanban />} />
								<Route path="/editor" element={<Editor />} />
								<Route path="/calendar" element={<Calendar />} />
								<Route path="/color-picker" element={<ColorPicker />} />

								{/* Charts */}
								<Route path="/line" element={<Line />} />
								<Route path="/area" element={<Area />} />
								<Route path="/bar" element={<Bar />} />
								<Route path="/pie" element={<Pie />} />
								<Route path="/financial" element={<Financial />} />
								<Route path="/color-mapping" element={<ColorMapping />} />
								<Route path="/pyramid" element={<Pyramid />} />
								<Route path="/stacked" element={<Stacked />} />
							</Routes>
						</div>

						{/* Footer */}
						<Footer />
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
