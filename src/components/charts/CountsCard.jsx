import React from 'react'

const CountsCard = ({ item, data }) => {
  return (
    <div className="bg-white flex-1 min-w-[200px] p-6 border rounded-lg shadow-lg border-gray-300 flex gap-2">
        <div className="flex-1 flex flex-col gap-3 md:gap-1.5">
            <h3 className="font-semibold text-lg md:text-base text-purple-700">
                {item.name}
            </h3>
            <div className="font-semibold text-4xl md:text-2xl flex items-end gap-2 text-gray-900 ">
            {data && data[item.key].toFixed(2)}
            <div className="text-sm mb-2">{item.unit}</div>
            <div className={`mb-2 font-medium text-base ${true ? 'text-green-500' : 'text-red-500'} md:text-xs`}>
            (+10%)
          </div>
            </div>
            <div className="text-sm md:text-xs text-gray-500 mb-1.5">
                {item.desc}
            </div>
        </div>
        <div
        className={`h-fit p-2 flex items-center justify-center rounded-lg`}
        style={{ background: item.lightColor, color: item.color }}
        >
            {item.icon}
        </div>
    </div>
  )
}

export default CountsCard