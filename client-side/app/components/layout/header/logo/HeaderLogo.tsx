import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Column from '@/ui/grid/Column'

const HeaderLogo: FC = () => {
	return (
		<Column size={2}>
			<Link className='flex items-center' href='/'>
				<Image className='mr-3' src='/images/logo.svg' width={30} height={30} alt='pages' />

				<span>
					<span className='logo'>
						PAGES
					</span>
				</span>
			</Link>
		</Column>
	)
}

export default HeaderLogo
