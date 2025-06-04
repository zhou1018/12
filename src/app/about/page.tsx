export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">关于我们</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            专业的法律服务机构
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            我们是一家专注于提供全方位法律服务的专业机构，致力于为客户提供最优质的法律解决方案。
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="lg:pr-8">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">我们的优势</h3>
              <ul className="mt-8 space-y-4 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="text-indigo-600">•</span>
                  <span>专业的律师团队，拥有丰富的执业经验</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-indigo-600">•</span>
                  <span>全面的法律服务领域，满足多样化需求</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-indigo-600">•</span>
                  <span>国际化的服务网络，提供跨境法律服务</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-indigo-600">•</span>
                  <span>创新的服务模式，确保高效优质的服务</span>
                </li>
              </ul>
            </div>

            <div className="lg:pl-8">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">我们的使命</h3>
              <p className="mt-6 text-gray-600">
                我们致力于为客户提供专业、高效、创新的法律服务，帮助客户实现商业目标，维护合法权益。
              </p>
              <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">我们的愿景</h3>
              <p className="mt-6 text-gray-600">
                成为最受信赖的法律服务机构，引领行业发展，推动法治进步。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 