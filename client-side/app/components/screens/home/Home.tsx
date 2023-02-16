import Image from 'next/image'
import { FC } from 'react'

import Layout from '@/layout/Layout'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'

import HomeInformation from './home-information/HomeInformation'
import HotSale from './hot-sale/HotSale'
import { IProductsPage } from '@/../pages'

const Home: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout
			title='Home'
			description='We believe that reading books are essential to a healthy culture.
			They’re where authors can connect with readers.'
		>
			<Row className='bg-primary'>
				<Column size={7} isPadding={false}>
					<Image src='/images/main-4x.png' alt='' width={833} height={727} />
				</Column>
				<Column className='flex-col' size={5} isPadding={false}>
					<HotSale />
					<HomeInformation />
				</Column>
			</Row>
		</Layout>
	)
}

export default Home
