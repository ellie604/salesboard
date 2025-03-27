// src/pages/Home.jsx
import React from 'react'

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-serif mb-4">
        Welcome <span className="font-normal">&#123;seller Name&#125;</span> to Your Customized Dashboard
      </h1>

      {/* Progress bar image */}
      <div className="my-4">
        <img src="/progressbar.png" alt="Dynamic Progress Bar" className="h-12" />
        <p className="text-center text-sm mt-1">Dynamic Progress Bar that shows where the transaction is at. Steps are labeled</p>
      </div>

      {/* Instruction box */}
      <div className="border p-6 max-w-4xl text-sm leading-relaxed">
        <p className="mb-2 text-center">
          Your dynamic progress bar on top will show you the progress on<br />
          The sell of your business in real time as it progresses.
        </p>
        <p className="mb-4 text-center">
          Please select from the menu items on the left.<br />
          From your custom seller’s dashboard to do the following:
        </p>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Download your listing agreement</li>
          <li>Fill out your business questionnaire Online.</li>
          <li>Upload your Financial documents.</li>
          <li>Buyer Activity: Up to the minute updates on buyers.</li>
          <li>Download your purchase contract (once we have an accepted buyer offer).</li>
          <li>Upload due diligence documents.</li>
          <li>Download Closing document once we are closed.</li>
          <li>After the Sale: Learn about ways mitigate taxes on the proceeds,</li>
        </ol>
      </div>
    </div>
  )
}
