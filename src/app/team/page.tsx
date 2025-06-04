const team = [
  {
    id: 1,
    name: '张明',
    role: '管理合伙人',
    description: '拥有20年法律从业经验，专注于公司并购和资本市场领域。曾参与多个重大并购项目，在业界享有盛誉。',
    expertise: ['公司并购', '资本市场', '跨境投资'],
    education: '北京大学法学博士',
    experience: '曾任某知名律所合伙人'
  },
  {
    id: 2,
    name: '李华',
    role: '知识产权合伙人',
    description: '知识产权领域专家，拥有丰富的专利诉讼和商标保护经验。曾成功代理多起重大知识产权案件。',
    expertise: ['专利诉讼', '商标保护', '技术转让'],
    education: '清华大学法学硕士',
    experience: '曾任某科技公司法律顾问'
  },
  {
    id: 3,
    name: '王芳',
    role: '商事诉讼合伙人',
    description: '商事诉讼领域资深律师，擅长处理复杂的商业纠纷和跨境争议。具有丰富的诉讼和仲裁经验。',
    expertise: ['商事诉讼', '国际仲裁', '合同纠纷'],
    education: '中国政法大学法学硕士',
    experience: '曾任某国际律所资深律师'
  },
  {
    id: 4,
    name: '陈强',
    role: '金融证券合伙人',
    description: '专注于金融证券法律服务，在IPO、债券发行等领域具有丰富经验。曾参与多个重大上市项目。',
    expertise: ['IPO', '债券发行', '私募投资'],
    education: '复旦大学法学硕士',
    experience: '曾任某证券公司法律部负责人'
  }
]

export default function Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">专业团队</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            精英律师团队
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            我们的团队由经验丰富的专业律师组成，他们在各自领域都拥有深厚的专业知识和丰富的实践经验。
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {team.map((member) => (
              <div key={member.id} className="flex flex-col">
                <dt className="text-2xl font-bold leading-7 text-gray-900">
                  {member.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="text-lg font-semibold text-indigo-600">{member.role}</p>
                  <p className="mt-2 flex-auto">{member.description}</p>
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-900">专业领域</h4>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <li
                          key={skill}
                          className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-900">教育背景</h4>
                    <p className="mt-2">{member.education}</p>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-900">工作经历</h4>
                    <p className="mt-2">{member.experience}</p>
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