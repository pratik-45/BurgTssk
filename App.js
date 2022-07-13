import React from 'react';
import './App.css';

import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
const pdata = [
  {
    months: 'April 04',
    expenses: 19,

  },

  {
    months: 'April 06',
    expenses: 18,

  },

  {
    months: 'April 08',
    expenses: 20.5,

  },
  {
    months: 'April 09',
    expenses: 22.5,

  },
  {
    months: 'April 10',
    expenses: 19.5,

  },

  {
    months: 'April 13',
    expenses: 18,

  },


  {
    months: 'April 15',
    expenses: 19.5,

  },

  {
    months: 'April 16',
    expenses: 19.5,

  },



];

function App() {
  return (
    <>
      <h1 className="chart-heading2">BURG DB</h1>
      <h1 className="chart-heading2">Financial Advisory Firm</h1>
      <h1 className="chart-heading">Average Daily Sales</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart className='bar-container'
          width={200}
          height={200}
          data={pdata}
          margin={{
            top: 5,
            right: 700,
            // left: -70,
            bottom: 15,

          }}
        >

          <XAxis dataKey="months" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="expenses" fill="#8884d8" />

        </BarChart>
      </ResponsiveContainer>


      <h1 className='area-heading'>Sales This Months</h1>
      <h2 className='area-heading1'>Users From All Channels</h2>
      <ResponsiveContainer

        className='area-container'
        width="100%" aspect={3}>

        <AreaChart width={730}
          height={250}
          data={pdata}

          margin={{ top: 25, right: 500, left: -10, bottom: 0 }} >
          <defs>

            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid yAxis={"false"} strokeDasharray="3 3" />
          <XAxis dataKey="months" axisLine={"false"} />
          <YAxis dataKey="expenses" />
          <baseValue dataMin />

          <Tooltip />

          <Area type="monotone" dataKey="expenses" stroke="#82ca9d" strokeWidth={5} fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </ResponsiveContainer>

    </>
  );
}

export default App;