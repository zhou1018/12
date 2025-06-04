import Link from 'next/link';

const services = [
  {
    id: 1,
    title: '公司并购',
    description: '提供全面的并购重组法律服务，包括尽职调查、交易结构设计、谈判支持等。',
    features: [
      '并购重组方案设计',
      '尽职调查',
      '交易文件起草与谈判',
      '反垄断审查',
      '并购后整合'
    ]
  },
  {
    id: 2,
    title: '知识产权',
    description: '提供全方位的知识产权保护服务，包括专利、商标、著作权等领域的法律咨询和诉讼代理。',
    features: [
      '专利申请与维权',
      '商标注册与保护',
      '著作权登记与维权',
      '知识产权诉讼',
      '技术转让与许可'
    ]
  },
  {
    id: 3,
    title: '商事诉讼',
    description: '提供专业的商事争议解决服务，包括诉讼、仲裁、调解等多种方式。',
    features: [
      '合同纠纷处理',
      '公司治理争议',
      '股东权益保护',
      '商业仲裁',
      '执行程序'
    ]
  },
  {
    id: 4,
    title: '劳动人事',
    description: '提供全面的劳动人事法律服务，帮助企业建立完善的劳动人事制度。',
    features: [
      '劳动合同审查',
      '员工手册制定',
      '劳动争议处理',
      '竞业限制协议',
      '劳动合规咨询'
    ]
  },
  {
    id: 5,
    title: '金融证券',
    description: '提供专业的金融证券法律服务，包括上市、发债、投资等领域的法律支持。',
    features: [
      'IPO法律服务',
      '债券发行',
      '私募股权投资',
      '金融监管合规',
      '金融产品设计'
    ]
  },
  {
    id: 6,
    title: '房地产与建设工程',
    description: '提供房地产与建设工程领域的专业法律服务，包括项目开发、建设、运营等全流程支持。',
    features: [
      '土地开发',
      '建设工程合同',
      '房地产交易',
      '物业管理',
      '建设工程纠纷'
    ]
  }
]

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">服务领域</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            专业的法律服务
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            我们提供全方位的法律服务，涵盖公司并购、知识产权、商事诉讼等多个专业领域，为客户提供最优质的法律解决方案。
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="flex flex-col">
                <dt className="text-2xl font-bold leading-7 text-gray-900">
                  {service.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex gap-x-3">
                        <span className="text-indigo-600">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-16 flex justify-center">
          <Link
            href="/contact"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            咨询我们的服务
          </Link>
        </div>
      </div>
    </div>
  )
} 