import React from 'react';

const Button = ({
	icon,
	color,
	bgColor,
	size,
	text,
	borderRadius,
	bgHoverColor,
	clickHandler,
	width,
}) => {
	return (
		<button
			type="button"
			onClick={clickHandler}
			style={{ backgroundColor: bgColor, color, borderRadius }}
			className={`text-${size} p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor} w-${width}`}
		>
			{icon} {text}
		</button>
	);
};

export default Button;
