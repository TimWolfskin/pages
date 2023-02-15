import { Spinner } from '@chakra-ui/react'
import { FC } from 'react'
import spinnerImage from './reload.svg'

import { COLORS } from '@/config/color.config'

const Loader: FC = () => {
	return (
		<img src={spinnerImage.src} alt='loader' width={200} height={200} />
	)
}

export default Loader
