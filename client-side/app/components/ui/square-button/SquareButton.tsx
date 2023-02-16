import { FC } from 'react'
import { IconType } from 'react-icons'
import { AiFillChrome } from 'react-icons/ai'

interface ISquareButton {
	Icon: IconType
	onClick?: () => void
	number?: number
}

const SquareButton: FC<ISquareButton> = ({ Icon, onClick, number }) => {
	return (
		<div>
			<button
				className='h-10 w-10 bg-[#FFCA42] flex items-center
         justify-center cursor-pointer hover:bg-[#e0ba59] transition-colors duration-300 relative'
				onClick={onClick}
			>
				{!!number && (
					<span
						className=' flex h-5 w-5 items-center justify-center rounded-full 
        bg-primary p-0.5 text-[0.75rem] text-white absolute -top-1 -right-1'
					>
						{number}
					</span>
				)}
				<Icon color='#141414' size={21} />
			</button>
		</div>
	)
}

export default SquareButton
