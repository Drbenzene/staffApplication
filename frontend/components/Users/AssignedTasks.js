import { ImCheckmark } from "react-icons/im";
import { GrInProgress } from "react-icons/gr";

const AssignedTasks = (props) => (
  <div>
    <div className="mx-auto container py-20 px-6">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="rounded">
          <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
            <div>
              <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
                13 things to work on
              </h4>
              <p className="text-gray-800 dark:text-gray-100 text-sm mb-3">
                Our interior design experts work with you to create the space
                that you have been dreaming about.
              </p>
            </div>

            <div>
              <div className="mb-3 flex items-center flex-no-wrap">
                <div className="w-6 h-6 bg-cover bg-center rounded-md">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png"
                    alt
                    className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"
                  />
                </div>
                <div className="w-6 h-6 bg-cover rounded-md -ml-2">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png"
                    alt
                    className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"
                  />
                </div>
                <div className="w-6 h-6 bg-cover rounded-md bg-center -ml-2">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png"
                    alt
                    className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col items-start">
                <div className="mb-3 border border-gray-800 rounded-full px-3 py-1 text-gray-800 text-xs flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-alarm"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={12} cy={13} r={7} />
                    <polyline points="12 10 12 13 14 13" />
                    <line x1={7} y1={4} x2="4.25" y2={6} />
                    <line x1={17} y1={4} x2="19.75" y2={6} />
                  </svg>
                  <p className="ml-2">7 Sept, 23:00</p>
                </div>
              </div>
              <div className="flex justify-between w-auto mb-5">
                <div className="cursor-pointer rounded-full p-1">
                  {/* <GrInProgress color="white" /> */}
                </div>
                <div className="cursor-pointer p-1 bg-black rounded-full">
                  <ImCheckmark color="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default AssignedTasks;
