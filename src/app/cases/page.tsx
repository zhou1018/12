const cases = [
  // ... existing code ...
]

export default function Cases() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">成功案例</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            我们的专业成就
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            我们致力于为客户提供最优质的法律服务，以下是我们处理的部分代表性案例。
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {cases.map((case_) => (
              <div key={case_.id} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  {case_.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{case_.description}</p>
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900">处理过程</h4>
                    <ul className="mt-2 list-disc list-inside">
                      {case_.process.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900">案件结果</h4>
                    <p className="mt-2">{case_.result}</p>
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                      {case_.category}
                    </span>
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 