import Image from 'next/image'

const cases = [
  {
    id: 1,
    title: '某大型企业并购重组项目',
    description: '协助某上市公司完成跨境并购重组，涉及金额超过50亿元人民币。',
    process: [
      '进行全面的尽职调查',
      '设计最优的并购方案',
      '协调各方利益关系',
      '处理复杂的监管审批'
    ],
    result: '成功完成并购重组，为客户创造了显著的价值提升。',
    category: '公司并购'
  },
  {
    id: 2,
    title: '知识产权侵权诉讼',
    description: '代理某科技公司处理专利侵权纠纷，涉及核心技术专利。',
    process: [
      '收集侵权证据',
      '制定诉讼策略',
      '进行技术分析',
      '参与庭审辩论'
    ],
    result: '成功获得法院支持，获赔金额超过1亿元。',
    category: '知识产权'
  },
  {
    id: 3,
    title: '重大商业合同纠纷',
    description: '处理某跨国公司与供应商之间的重大合同纠纷。',
    process: [
      '分析合同条款',
      '评估违约损失',
      '进行商业谈判',
      '达成和解协议'
    ],
    result: '通过调解成功解决纠纷，为客户挽回损失超过2亿元。',
    category: '商事诉讼'
  }
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