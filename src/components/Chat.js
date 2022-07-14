import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import Button from './Button';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Chat = () => {
	const { currentColor, setIsClicked } = useStateContext();

	return (
		<div className="nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464d] p-8 rounded-lg w-96">
			{/* Header */}
			<div className="flex justify-between items-center">
				<p className="font-semibold text-lg dark:text-gray-200">Messages</p>
				<Button
					icon={<MdOutlineCancel />}
					color="rgb(153, 171, 180)"
					bgHoverColor="light-gray"
					size="2xl"
					borderRadius="50%"
					clickHandler={() => setIsClicked(prevState => !prevState)}
				/>
			</div>
			{/* Item */}
			<div className="mt-5">
				{chatData?.map((item, index) => (
					<div
						key={index}
						className="flex gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer"
					>
						<div className="relative">
							<img
								className="rounded-full h-10 w-10"
								src={item.image}
								alt={item.message}
							/>
						</div>
						<div>
							<p className="font-semibold dark:text-gray-200">{item.message}</p>
							<p className="text-gray-500 dark:text-gray-400 text-sm">
								{item.desc}
							</p>
							<p className="text-gray-500 dark:text-gray-400 text-xs">
								{item.time}
							</p>
						</div>
					</div>
				))}
			</div>
			{/* Button */}
			<div className="mt-5">
				<Button
					color="white"
					bgColor={currentColor}
					text="See all messages"
					borderRadius="10px"
					width="full"
				/>
			</div>
		</div>
	);
};

export default Chat;
