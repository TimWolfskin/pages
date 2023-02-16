import { FC } from 'react'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'

const HomeInformation: FC = () => {
	return (
		<Row>
			<Column size={3} className='flex-col py-14'>
				<div className='font-normal text-4xl text-white'>100k</div>
				<div className='text-white/60 text-sm'>Customers</div>
			</Column>
			<Column className='flex-col' size={9}>
				<div className='p-10'>
					<div className='font-normal text-4xl text-white mb-2'>New Collection</div>
					<div className='text-white/60 text-sm'>
						As the book contains theoretical content as well as solved
						questions.
					</div>
				</div>
			</Column>
		</Row>
	)
}

export default HomeInformation
