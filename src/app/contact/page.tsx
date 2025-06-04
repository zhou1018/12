export default function Contact() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">联系我们</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            随时为您服务
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            无论您有任何法律问题或需求，我们都将竭诚为您提供专业的法律咨询和服务。
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="lg:pr-8">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">联系方式</h3>
              <ul className="mt-8 space-y-4 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="text-indigo-600">•</span>
                  <span>电话：+86 123 4567 8900</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-indigo-600">•</span>
                  <span>邮箱：contact@lawfirm.com</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-indigo-600">•</span>
                  <span>地址：北京市朝阳区建国路88号</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-indigo-600">•</span>
                  <span>工作时间：周一至周五 9:00-18:00</span>
                </li>
              </ul>
            </div>

            <div className="lg:pl-8">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">在线咨询</h3>
              <form className="mt-6 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    姓名
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    邮箱
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                    咨询内容
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    提交咨询
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 