import { Card, Tabs } from "flowbite-react";
import { useEffect } from "react";

const ServicesPage = () => {
  useEffect(() => {
    document.title = `Services | The Kings Height Realty`;

    return () => {
      document.title = `The Kings Height Realty`;
    };
  }, []);

  return (
    <section className="dark:bg-gray-800">
      <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Our Services
      </h1>
      <Card className="max-w-xl mx-2 my-4 sm:max-w-xl sm:mx-auto">
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Some of the things we do
          </h5>
        </div>
        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-lg font-medium text-gray-900 dark:text-white">
                    Real Estate Agency
                  </p>
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-lg font-medium text-gray-900 dark:text-white">
                    Land Sales
                  </p>
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-lg font-medium text-gray-900 dark:text-white">
                    Land Survey and Mapping
                  </p>
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-lg font-medium text-gray-900 dark:text-white">
                    Land Demarcation
                  </p>
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-lg font-medium text-gray-900 dark:text-white">
                    Property Valuation
                  </p>
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-lg font-medium text-gray-900 dark:text-white">
                    Building and Construction
                  </p>
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-lg font-medium text-gray-900 dark:text-white">
                    Project Management
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Card>

      <Card className="rounded-lg shadow-lg mt-2 mb-16 p-2">
        <Tabs aria-label="Pills" variant="pills">
          <Tabs.Item active title="Real Estate Agency">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="structure/structure-1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="structure/structure-2.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="structure/structure-3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="structure/structure-4.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="structure/structure-5.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="structure/structure-6.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="structure/structure-7.jpg"
                  alt=""
                />
              </div>
            </div>
          </Tabs.Item>

          <Tabs.Item title="Building and Construction">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="construction/construction-1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="construction/construction-2.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="construction/construction-3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="construction/construction-4.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="construction/construction-5.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="construction/construction-6.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="construction/construction-7.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="construction/construction-8.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="construction/construction-9.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="construction/construction-10.jpg"
                  alt=""
                />
              </div>
            </div>
          </Tabs.Item>

          <Tabs.Item title="Land Planning">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="planning/plan-1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="planning/plan-2.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="planning/plan-3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="planning/plan-4.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="planning/plan-5.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="planning/plan-6.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="planning/plan-7.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="planning/plan-8.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="planning/plan-9.jpg"
                  alt=""
                />
              </div>
            </div>
          </Tabs.Item>

          <Tabs.Item title="Interior Designs">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="design/design-1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="design/design-2.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="design/design-3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="design/design-4.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="design/design-5.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="design/design-6.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="design/design-7.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="design/design-8.jpg"
                  alt=""
                />
              </div>
            </div>
          </Tabs.Item>

          <Tabs.Item title="Land Surveying and Mapping">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="survey/survey-1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="survey/survey-2.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="survey/survey-3.jpg"
                  alt=""
                />
              </div>
            </div>
          </Tabs.Item>
        </Tabs>
      </Card>
    </section>
  );
};

export default ServicesPage;
