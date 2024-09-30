import { React, useState, useEffect} from 'react'
import { Slider } from '../components'
import { trackedorders } from '../data/dummy'

const TrackCard = () => {
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
        <div  key={index} className="bg-white dark:bg-[#545454] rounded-3xl p-2 border-2 shadow-lg md:w-[30vw]" style={{ borderRightColor: order.color, borderBottomColor: order.color}}>
              <div className="flex justify-center mb-2">
                <div className='text-center'>
                  <h3>Tracking ID</h3>
                  <h1 className="font-bold">{order.id}</h1>
                </div> 
              </div>
              <div className="mb-2">            
                  <div className='flex items-center justify-around mb-2'>
                    <h3>D.O.D</h3>
                    <div className="flex items-center justify-center px-2 rounded-3xl" style={{ backgroundColor: order.color }}>
                    <h5>{order.status}</h5>
                    </div>
                  </div>
                  <h1 className="text-center font-bold">{order.deliveryDate}</h1>                        
              </div>
              <Slider value={order.sliderPercentage} color={order.color} />
              <div className="flex flex-col md:flex-row md:justify-between mt-2">
                <div className='flex items-center gap-2 md:flex-col md:gap-0'>
                  <h3>P/A:</h3>
                  <h5 className="font-bold whitespace-nowrap">{order.pickupAddress}</h5>
                </div>
                <div className='flex items-center gap-2 md:flex-col md:gap-0'>
                  <h3>D/A:</h3>
                  <h5 className="font-bold whitespace-nowrap">{order.deliveryAddress}</h5>
                </div>
              </div>
            </div>
      ))}
    </>
  )
}

export default TrackCard