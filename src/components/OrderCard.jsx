import { React, useState, useEffect} from 'react'
import { Slider } from '../components'
import { trackedorders } from '../data/dummy'

const OrderCard = () => {
    const [orderStates, setOrderStates] = useState([]);

  useEffect(() => {
    const initialOrderStates = trackedorders.map((order) => {
      let color = '';
      let status = '';

      if (order.sliderPercentage === 0) {
        color = '#00A7EC';
        status = 'Shipping';
      } else if (order.sliderPercentage > 0 && order.sliderPercentage < 100) {
        color = '#FFC107';
        status = 'Pending';
      } else if (order.sliderPercentage === 100) {
        color = '#80FFBA';
        status = 'Successful';
      }

      return { ...order, color, status };
    });

    setOrderStates(initialOrderStates);
  }, []);

  return (
    <>
        {orderStates.map((order, index) => (
            <div key={index} className='border border-black-200 dark:bg-[#545454] shadow-md rounded-3xl p-4'>
                <div className='w-[85vw] flex justify-between border-b border-black-500 pb-4'>
                    <div>
                        <h3>Package Contains</h3>
                        <h1 className='text-lg font-bold'>{order.packageContent}</h1>
                    </div>
                    <div>
                        <h3>Package Quantity</h3>
                        <h1 className='text-right text-lg font-bold'>{order.packageQuantity}</h1>
                    </div>
                </div>
                <div className='flex justify-between items-center pt-2 mb-4'>
                    <div>
                        <h3>Estimated Date of Delivery</h3>
                        <h1 className='text-lg font-bold'>{order.deliveryDate}</h1>
                    </div>
                    <div className='rounded-3xl p-2' style={{ background: order.color}}>
                        <h3>{order.status}</h3>
                    </div>
                </div>        
                <Slider value={order.sliderPercentage} color={order.color}/>
                <div className='flex justify-between mt-2'>
                    <div>
                        <h5>Pickup Address</h5>
                        <h3 className='font-bold'>{order.pickupAddress}</h3>
                    </div>
                    <div>
                        <h5>Delivery Address</h5>
                        <h3 className='font-bold'>{order.deliveryAddress}</h3>
                    </div>
                </div>
            </div>
        ))}
    </>    
  )
}

export default OrderCard