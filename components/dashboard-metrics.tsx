"use client"

import { useEffect, useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const generateData = () => {
  const data = []
  const now = new Date()

  for (let i = 29; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)

    data.push({
      date: `${date.getMonth() + 1}/${date.getDate()}`,
      calls: Math.floor(Math.random() * 50) + 80,
      appointments: Math.floor(Math.random() * 20) + 10,
      conversions: Math.floor(Math.random() * 15) + 5,
    })
  }

  return data
}

export default function DashboardMetrics() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(generateData())
  }, [])

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="calls" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="appointments" stroke="#82ca9d" />
          <Line type="monotone" dataKey="conversions" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
