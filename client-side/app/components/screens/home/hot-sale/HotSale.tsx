import { formatToCurrency } from '@/utils/format-to-currency'
import {FC} from 'react'

const HotSale: FC = () => {
  return (
    <div className='text-white py-16 px-8'>
        <div className="">HOT SALE</div>
        <h1 className='text-5xl font-medium mt-5 mb-14'>
        Your Books From
        FROM THE BEST AUTHORS
        </h1> 
        <div className="flex items-center justify-between">
            <div className="">
                <span className='font-normal text-3xl mr-2'>{formatToCurrency(6)}</span>
                <span className='line-through opacity-50 text-sm'>{formatToCurrency(10)}</span>
            </div>
            <button className='uppercase text-white border-b border-white/20'>BUY NOW</button>
        </div>
    </div>
  )
}

export default HotSale 