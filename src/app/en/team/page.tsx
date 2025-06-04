const team = [
  {
    id: 1,
    name: 'Ming Zhang',
    role: 'Managing Partner',
    description: 'With 20 years of legal experience, specializing in M&A and capital markets. Has participated in numerous major M&A projects and is highly regarded in the industry.',
    expertise: ['M&A', 'Capital Markets', 'Cross-border Investment'],
    education: 'Ph.D. in Law, Peking University',
    experience: 'Former Partner at a Leading Law Firm'
  },
  {
    id: 2,
    name: 'Hua Li',
    role: 'IP Partner',
    description: 'Expert in intellectual property with extensive experience in patent litigation and trademark protection. Successfully represented clients in major IP cases.',
    expertise: ['Patent Litigation', 'Trademark Protection', 'Technology Transfer'],
    education: 'Master of Laws, Tsinghua University',
    experience: 'Former Legal Counsel at a Technology Company'
  },
  {
    id: 3,
    name: 'Fang Wang',
    role: 'Commercial Litigation Partner',
    description: 'Senior lawyer in commercial litigation, specializing in complex business disputes and cross-border disputes. Extensive experience in litigation and arbitration.',
    expertise: ['Commercial Litigation', 'International Arbitration', 'Contract Disputes'],
    education: 'Master of Laws, China University of Political Science and Law',
    experience: 'Former Senior Lawyer at an International Law Firm'
  },
  {
    id: 4,
    name: 'Qiang Chen',
    role: 'Financial & Securities Partner',
    description: 'Specializes in financial and securities legal services with rich experience in IPO and bond issuance. Has participated in numerous major listing projects.',
    expertise: ['IPO', 'Bond Issuance', 'Private Investment'],
    education: 'Master of Laws, Fudan University',
    experience: 'Former Head of Legal Department at a Securities Company'
  }
]

export default function Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Team</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Elite Legal Professionals
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our team consists of experienced legal professionals who possess deep expertise and extensive practical experience in their respective fields.
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
                    <h4 className="text-sm font-semibold text-gray-900">Areas of Expertise</h4>
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
                    <h4 className="text-sm font-semibold text-gray-900">Education</h4>
                    <p className="mt-2">{member.education}</p>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-900">Experience</h4>
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