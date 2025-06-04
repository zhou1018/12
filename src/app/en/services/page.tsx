import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'M&A',
    description: 'Providing comprehensive M&A legal services, including due diligence, transaction structure design, and negotiation support.',
    features: [
      'M&A Strategy Design',
      'Due Diligence',
      'Transaction Documentation',
      'Antitrust Review',
      'Post-Merger Integration'
    ]
  },
  {
    id: 2,
    title: 'Intellectual Property',
    description: 'Offering comprehensive IP protection services, including legal consultation and litigation representation in patents, trademarks, and copyrights.',
    features: [
      'Patent Application & Protection',
      'Trademark Registration & Protection',
      'Copyright Registration & Protection',
      'IP Litigation',
      'Technology Transfer & Licensing'
    ]
  },
  {
    id: 3,
    title: 'Commercial Litigation',
    description: 'Providing professional commercial dispute resolution services through litigation, arbitration, and mediation.',
    features: [
      'Contract Disputes',
      'Corporate Governance Disputes',
      'Shareholder Rights Protection',
      'Commercial Arbitration',
      'Enforcement Proceedings'
    ]
  },
  {
    id: 4,
    title: 'Labor & Employment',
    description: 'Offering comprehensive labor and employment legal services to help companies establish sound HR systems.',
    features: [
      'Employment Contract Review',
      'Employee Handbook Development',
      'Labor Dispute Resolution',
      'Non-competition Agreements',
      'Labor Compliance Consulting'
    ]
  },
  {
    id: 5,
    title: 'Financial & Securities',
    description: 'Providing professional legal services in financial and securities matters, including IPO, bond issuance, and investment.',
    features: [
      'IPO Legal Services',
      'Bond Issuance',
      'Private Equity Investment',
      'Financial Regulatory Compliance',
      'Financial Product Design'
    ]
  },
  {
    id: 6,
    title: 'Real Estate & Construction',
    description: 'Providing professional legal services in real estate and construction, supporting the entire project lifecycle.',
    features: [
      'Land Development',
      'Construction Contracts',
      'Real Estate Transactions',
      'Property Management',
      'Construction Disputes'
    ]
  }
]

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Practice Areas</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Professional Legal Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide comprehensive legal services covering M&A, intellectual property, commercial litigation, and other specialized areas, delivering the highest quality legal solutions for our clients.
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
            href="/en/contact"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Consult Our Services
          </Link>
        </div>
      </div>
    </div>
  )
}
 