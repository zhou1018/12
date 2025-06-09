import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  专业法律服务，守护您的权益
                </h1>
                <p className="mt-2 text-xl text-indigo-600">
                  值得信赖的法律伙伴
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  我们是一支经验丰富的律师团队，致力于为客户提供专业、高效的法律服务。无论是个人还是企业，我们都能为您提供全方位的法律支持。
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/contact"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    联系我们
                  </Link>
                  <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900">
                    了解更多 <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">专业服务</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            全方位的法律服务
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            我们提供全面的法律服务，包括但不限于以下领域：
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: '商事法律服务',
                description: '为企业提供全方位的法律支持，包括公司设立、并购重组、股权激励等。',
              },
              {
                name: '知识产权保护',
                description: '提供专利、商标、著作权等知识产权的申请、保护和管理服务。',
              },
              {
                name: '争议解决',
                description: '通过诉讼、仲裁、调解等多种方式，帮助客户解决各类法律纠纷。',
              },
            ].map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Team section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">专业团队</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              我们的团队由经验丰富的律师组成，他们在各自领域都有深厚的专业背景和丰富的实践经验。
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: '张律师',
                role: '合伙人',
                description: '专注于商事法律领域，拥有超过15年的执业经验。',
              },
              {
                name: '李律师',
                role: '资深律师',
                description: '知识产权专家，曾处理多起重大知识产权案件。',
              },
              {
                name: '王律师',
                role: '资深律师',
                description: '争议解决专家，擅长处理复杂的商业纠纷。',
              },
            ].map((person) => (
              <div key={person.name} className="flex flex-col items-start">
                <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-base leading-7 text-indigo-600">{person.role}</p>
                  <p className="mt-4 text-base leading-7 text-gray-600">{person.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
