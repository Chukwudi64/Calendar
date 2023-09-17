import React, { useState } from 'react';
import { Calendar, months } from './components/Calendar';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Cr from './components/Cr';
import dayjs from 'dayjs';

const App = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate)

  return (
    <div className='flex w-1/2 mx-auto divide-x-2 gap-10 h-screen items-center justify-center'>    
      <div className='w-96 h-96'>
        <div className='flex justify-between pb-8'>
          <h1 className='font-semibold'>
            {months[today.month()]} {today.year()}
          </h1>
          <div className='flex items-center gap-5'>
            <GrFormPrevious 
              className='w-6 h-6 cursor-pointer bg-slate-50 rounded-full'
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }} 
            />
            <GrFormNext 
              className='w-6 h-6 cursor-pointer bg-slate-50 rounded-full'
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}  
            />
          </div>
        </div>
        <div className='w-full grid grid-cols-7'>
          {days.map((day, index) => {
            const dayClass = index === 0 ? 'rounded-l-xl' : index === 6 ? 'rounded-r-xl' : '';
            return (
              <h1 key={index} className={`h-9 grid place-content-center text-sm bg-slate-100 font-semibold ${dayClass}`}>
                {day}
              </h1>
            );
          })}
        </div>
        <div className='w-full grid grid-cols-7'>
          {Calendar(today.month(), today.year()).map(({ date, currentMonth, today }, index) => {
            return (
              <div key={index} className='h-14 grid place-content-center text-sm'> 
                <h1 className={Cr(currentMonth ? "" : "text-gray-400", today ? "bg-slate-300 rounded-full font-bold" : "font-medium", 'h-7 w-7 grid place-content-center rounded-full cursor-pointer')}>
                  {date.date()}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App