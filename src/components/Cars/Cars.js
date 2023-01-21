import { useQuery } from 'react-query';
import React from 'react';
import Car from '../Car/Car';

const Cars = () => {
    const { data: cars =[] ,refetch} = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
          const result = await fetch("https://rentvroom-server.vercel.app/cars");
          const data = await result.json();
          return data;
        },
      });
    return (
        <div className='cars'>
            {
                cars?.length && 
                cars.map((car)=> (<Car car={car} key={car._id} refetch={refetch}></Car>))
            }
        </div>
    );
};

export default Cars;