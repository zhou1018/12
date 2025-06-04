export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">About Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Professional Legal Service Provider
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are a professional institution focused on providing comprehensive legal services, committed to delivering the highest quality legal solutions for our clients.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="lg:pr-8">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Our Advantages</h3>
              <ul className="mt-8 space-y-4 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="text-indigo-600">•</span>
                  <span>Professional legal team with extensive experience</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-indigo-600">•</span>
                  <span>Comprehensive legal service areas to meet diverse needs</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-indigo-600">•</span>
                  <span>International service network for cross-border legal services</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-indigo-600">•</span>
                  <span>Innovative service model ensuring efficient and quality service</span>
                </li>
              </ul>
            </div>

            <div className="lg:pl-8">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Our Mission</h3>
              <p className="mt-6 text-gray-600">
                We are dedicated to providing professional, efficient, and innovative legal services to help our clients achieve their business goals and protect their legal rights.
              </p>
              <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Our Vision</h3>
              <p className="mt-6 text-gray-600">
                To become the most trusted legal service provider, leading industry development and promoting the advancement of the rule of law.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 