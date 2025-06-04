import Link from 'next/link';

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
                  Professional Legal Services, Protecting Your Rights
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We are an experienced team of lawyers dedicated to providing professional and efficient legal services. Whether you are an individual or a business, we can provide comprehensive legal support.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/en/contact"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Contact Us
                  </Link>
                  <Link href="/en/services" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn More <span aria-hidden="true">→</span>
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
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Professional Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Legal Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide comprehensive legal services, including but not limited to:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: 'Commercial Legal Services',
                description: 'Providing comprehensive legal support for businesses, including company formation, M&A, and equity incentives.',
              },
              {
                name: 'Intellectual Property Protection',
                description: 'Offering services for patent, trademark, and copyright applications, protection, and management.',
              },
              {
                name: 'Dispute Resolution',
                description: 'Helping clients resolve various legal disputes through litigation, arbitration, and mediation.',
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Professional Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our team consists of experienced lawyers with deep professional backgrounds and rich practical experience in their respective fields.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: 'Mr. Zhang',
                role: 'Partner',
                description: 'Specializes in commercial law with over 15 years of practice experience.',
              },
              {
                name: 'Ms. Li',
                role: 'Senior Attorney',
                description: 'Intellectual property expert with experience in handling major IP cases.',
              },
              {
                name: 'Mr. Wang',
                role: 'Senior Attorney',
                description: 'Dispute resolution expert, skilled in handling complex commercial disputes.',
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