import React from 'react'
import { clients } from '../constants'

const Clients = () => {
  return (
    <div className=" mx-auto px-4 py-8 mt-20 bg-gray-800">
      <h2 className="text-centertext-lg md:xl font-semibold text-purple-700 p-6">Don't listen to us, listen to our clients</h2>
      <div className="flex md:overflow-x-auto overflow-y-hidden" style={{'scrollbarWidth': 'none','::WebkitScrollbar': { 'display': 'none' }}}>
      {clients.map((client) =>(
        <div className="flex-shrink-0 mx-4" key={client.id}>
        <div className="rounded-md overflow-hidden shadow-md" style={{ width: '300px', height: '400px' }}>
          <img className="w-full h-[200px] object-cover" src={client.img} alt={client.alt} />
          <div className="bg-gray-700 text-white p-4">
          <h3 className="text-white text-lg font-semibold">{client.name}</h3>
          <div className="flex mb-2">
              {Array.from({ length: client.starsCount }, (_, index) => (
                <client.stars key={index} className="text-[#0ef] w-4 h-4 mr-1" />
              ))}
            </div>
            <p className="text-sm">{client.feedback}</p>
          </div>
        </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Clients
