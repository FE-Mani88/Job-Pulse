import React from 'react';
import { ChartArea, Hand, HandCoins, Search, Users } from "lucide-react";

export default function OurPlans() {
  return (
    <div className="mt-20 text-center" id='our-plans'>
      <div className="flex items-center my-8">
        <div className="flex-grow h-px bg-gray-300"></div>
        <h2 className="px-4 text-xl font-semibold text-gray-700 whitespace-nowrap">Our Plans</h2>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      <div className="bg-gray-400/5 max-w-6xl mx-auto mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8 px-6 rounded-[8px]">

        <div className="bg-white text-center p-4 rounded-md">
          <div className="bg-green-200 w-max p-4 mx-auto rounded-md">
            <Users className="text-green-600 w-8 h-8" />
          </div>
          <h2 className="mt-4 font-[600]">Users</h2>
          <p className="mt-2 text-zinc-600 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, saepe.</p>
        </div>

        <div className="bg-white text-center p-4 rounded-md">
          <div className="bg-purple-200 w-max p-4 mx-auto rounded-md">
            <Search className="text-purple-500 w-8 h-8" />
          </div>
          <h2 className="mt-4 font-[600]">Explore</h2>
          <p className="mt-2 text-zinc-600 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, saepe.</p>
        </div>

        <div className="bg-white text-center p-4 rounded-md">
          <div className="bg-orange-200 w-max p-4 mx-auto rounded-md">
            <ChartArea className="text-orange-400 w-8 h-8" />
          </div>
          <h2 className="mt-4 font-[600]">Data</h2>
          <p className="mt-2 text-zinc-600 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, saepe.</p>
        </div>

        <div className="bg-white text-center p-4 rounded-md">
          <div className="bg-yellow-200 w-max p-4 mx-auto rounded-md">
            <HandCoins className="text-yellow-500 w-8 h-8" />
          </div>
          <h2 className="mt-4 font-[600]">Charity</h2>
          <p className="mt-2 text-zinc-600 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, saepe.</p>
        </div>

      </div>
    </div>
  )
}
