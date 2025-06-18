import { Link } from "react-router-dom";

export default function Subscription() {
  return (
    <div className="flex flex-col items-center  p-8 min-h-screen">
      <div className="w-full  grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Starter Plan */}
        <div className="bg-white rounded-lg p-6 border  flex flex-col ">
          <div className="flex justify-start items-start flex-col  ga-4  mb-4">
            <div>
              <h3 className="text-[25px] font-semibold text-gray-800">
                Starter
              </h3>
            </div>
            <div className="  py-1 rounded-md">
              <span className="text-[#0743A2] font-medium text-[31px]">
                Free
              </span>
            </div>
          </div>

          <hr className="mt-6 border-[#0743A2] pb-10" />
          <ul className="space-y-3 mb-6 flex-grow">
            <li className="flex items-center">
              <div className=" flex items-center justify-center mr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99999 1.66699C5.40832 1.66699 1.66666 5.40866 1.66666 10.0003C1.66666 14.592 5.40832 18.3337 9.99999 18.3337C14.5917 18.3337 18.3333 14.592 18.3333 10.0003C18.3333 5.40866 14.5917 1.66699 9.99999 1.66699ZM13.9833 8.08366L9.25832 12.8087C9.14166 12.9253 8.98332 12.992 8.81666 12.992C8.64999 12.992 8.49166 12.9253 8.37499 12.8087L6.01666 10.4503C5.77499 10.2087 5.77499 9.80866 6.01666 9.56699C6.25832 9.32533 6.65832 9.32533 6.89999 9.56699L8.81666 11.4837L13.1 7.20033C13.3417 6.95866 13.7417 6.95866 13.9833 7.20033C14.225 7.44199 14.225 7.83366 13.9833 8.08366Z"
                    fill="#0743A2"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-gray-700">
                Create 1 carpool team
              </span>
            </li>
            <li className="flex items-center">
              <div className="flex items-center justify-center mr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99999 1.66699C5.40832 1.66699 1.66666 5.40866 1.66666 10.0003C1.66666 14.592 5.40832 18.3337 9.99999 18.3337C14.5917 18.3337 18.3333 14.592 18.3333 10.0003C18.3333 5.40866 14.5917 1.66699 9.99999 1.66699ZM13.9833 8.08366L9.25832 12.8087C9.14166 12.9253 8.98332 12.992 8.81666 12.992C8.64999 12.992 8.49166 12.9253 8.37499 12.8087L6.01666 10.4503C5.77499 10.2087 5.77499 9.80866 6.01666 9.56699C6.25832 9.32533 6.65832 9.32533 6.89999 9.56699L8.81666 11.4837L13.1 7.20033C13.3417 6.95866 13.7417 6.95866 13.9833 7.20033C14.225 7.44199 14.225 7.83366 13.9833 8.08366Z"
                    fill="#0743A2"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-gray-700">Includes ads</span>
            </li>
            <li className="flex items-center">
              <div className=" flex items-center justify-center mr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99999 1.66699C5.40832 1.66699 1.66666 5.40866 1.66666 10.0003C1.66666 14.592 5.40832 18.3337 9.99999 18.3337C14.5917 18.3337 18.3333 14.592 18.3333 10.0003C18.3333 5.40866 14.5917 1.66699 9.99999 1.66699ZM13.9833 8.08366L9.25832 12.8087C9.14166 12.9253 8.98332 12.992 8.81666 12.992C8.64999 12.992 8.49166 12.9253 8.37499 12.8087L6.01666 10.4503C5.77499 10.2087 5.77499 9.80866 6.01666 9.56699C6.25832 9.32533 6.65832 9.32533 6.89999 9.56699L8.81666 11.4837L13.1 7.20033C13.3417 6.95866 13.7417 6.95866 13.9833 7.20033C14.225 7.44199 14.225 7.83366 13.9833 8.08366Z"
                    fill="#0743A2"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-gray-700">
                Standard features
              </span>
            </li>
          </ul>

          <button className="w-full py-3 bg-[#E6ECF6]  text-[#0743A2] rounded-full mt-4 transition-colors">
            Delete Plan
          </button>
        </div>
        <div className="bg-white rounded-lg p-6 border  flex flex-col ">
          <div className="flex justify-between flex-col  ga-4 items-start mb-4">
            <div>
              <h3 className="text-[25px] font-semibold text-gray-800">
                Premium Plan
              </h3>
            </div>
            <div className=" px-3 py-1 rounded-md">
              <span className="text-[#0743A2] font-medium text-[31px]">
                $49/month
              </span>
            </div>
          </div>

          <hr className="mt-6  pb-10" />
          <ul className="space-y-3 mb-6 flex-grow">
            <li className="flex items-center">
              <div className=" flex items-center justify-center mr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99999 1.66699C5.40832 1.66699 1.66666 5.40866 1.66666 10.0003C1.66666 14.592 5.40832 18.3337 9.99999 18.3337C14.5917 18.3337 18.3333 14.592 18.3333 10.0003C18.3333 5.40866 14.5917 1.66699 9.99999 1.66699ZM13.9833 8.08366L9.25832 12.8087C9.14166 12.9253 8.98332 12.992 8.81666 12.992C8.64999 12.992 8.49166 12.9253 8.37499 12.8087L6.01666 10.4503C5.77499 10.2087 5.77499 9.80866 6.01666 9.56699C6.25832 9.32533 6.65832 9.32533 6.89999 9.56699L8.81666 11.4837L13.1 7.20033C13.3417 6.95866 13.7417 6.95866 13.9833 7.20033C14.225 7.44199 14.225 7.83366 13.9833 8.08366Z"
                    fill="#0743A2"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-gray-700">
                Multiple carpool teams
              </span>
            </li>
            <li className="flex items-center">
              <div className=" flex items-center justify-center mr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1.66699C5.40835 1.66699 1.66669 5.40866 1.66669 10.0003C1.66669 14.592 5.40835 18.3337 10 18.3337C14.5917 18.3337 18.3334 14.592 18.3334 10.0003C18.3334 5.40866 14.5917 1.66699 10 1.66699ZM13.9834 8.08366L9.25835 12.8087C9.14169 12.9253 8.98335 12.992 8.81669 12.992C8.65002 12.992 8.49169 12.9253 8.37502 12.8087L6.01669 10.4503C5.77502 10.2087 5.77502 9.80866 6.01669 9.56699C6.25835 9.32533 6.65835 9.32533 6.90002 9.56699L8.81669 11.4837L13.1 7.20033C13.3417 6.95866 13.7417 6.95866 13.9834 7.20033C14.225 7.44199 14.225 7.83366 13.9834 8.08366Z"
                    fill="#0743A2"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-gray-700">No ads</span>
            </li>
            <li className="flex items-center">
              <div className=" flex items-center justify-center mr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99999 1.66699C5.40832 1.66699 1.66666 5.40866 1.66666 10.0003C1.66666 14.592 5.40832 18.3337 9.99999 18.3337C14.5917 18.3337 18.3333 14.592 18.3333 10.0003C18.3333 5.40866 14.5917 1.66699 9.99999 1.66699ZM13.9833 8.08366L9.25832 12.8087C9.14166 12.9253 8.98332 12.992 8.81666 12.992C8.64999 12.992 8.49166 12.9253 8.37499 12.8087L6.01666 10.4503C5.77499 10.2087 5.77499 9.80866 6.01666 9.56699C6.25832 9.32533 6.65832 9.32533 6.89999 9.56699L8.81666 11.4837L13.1 7.20033C13.3417 6.95866 13.7417 6.95866 13.9833 7.20033C14.225 7.44199 14.225 7.83366 13.9833 8.08366Z"
                    fill="#0743A2"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-gray-700">
                Live GPS tracking & notifications
              </span>
            </li>
            <li className="flex items-center">
              <div className=" flex items-center justify-center mr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1.66699C5.40835 1.66699 1.66669 5.40866 1.66669 10.0003C1.66669 14.592 5.40835 18.3337 10 18.3337C14.5917 18.3337 18.3334 14.592 18.3334 10.0003C18.3334 5.40866 14.5917 1.66699 10 1.66699ZM13.9834 8.08366L9.25835 12.8087C9.14169 12.9253 8.98335 12.992 8.81669 12.992C8.65002 12.992 8.49169 12.9253 8.37502 12.8087L6.01669 10.4503C5.77502 10.2087 5.77502 9.80866 6.01669 9.56699C6.25835 9.32533 6.65835 9.32533 6.90002 9.56699L8.81669 11.4837L13.1 7.20033C13.3417 6.95866 13.7417 6.95866 13.9834 7.20033C14.225 7.44199 14.225 7.83366 13.9834 8.08366Z"
                    fill="#0743A2"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-gray-700">
                AI Marketing & SEO recommendations
              </span>
            </li>
            <li className="flex items-center">
              <div className=" flex items-center justify-center mr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1.66699C5.40835 1.66699 1.66669 5.40866 1.66669 10.0003C1.66669 14.592 5.40835 18.3337 10 18.3337C14.5917 18.3337 18.3334 14.592 18.3334 10.0003C18.3334 5.40866 14.5917 1.66699 10 1.66699ZM13.9834 8.08366L9.25835 12.8087C9.14169 12.9253 8.98335 12.992 8.81669 12.992C8.65002 12.992 8.49169 12.9253 8.37502 12.8087L6.01669 10.4503C5.77502 10.2087 5.77502 9.80866 6.01669 9.56699C6.25835 9.32533 6.65835 9.32533 6.90002 9.56699L8.81669 11.4837L13.1 7.20033C13.3417 6.95866 13.7417 6.95866 13.9834 7.20033C14.225 7.44199 14.225 7.83366 13.9834 8.08366Z"
                    fill="#0743A2"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-gray-700">
                Temporary pickup/dropoff locations
              </span>
            </li>
            <li className="flex items-center">
              <div className=" flex items-center justify-center mr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1.66699C5.40835 1.66699 1.66669 5.40866 1.66669 10.0003C1.66669 14.592 5.40835 18.3337 10 18.3337C14.5917 18.3337 18.3334 14.592 18.3334 10.0003C18.3334 5.40866 14.5917 1.66699 10 1.66699ZM13.9834 8.08366L9.25835 12.8087C9.14169 12.9253 8.98335 12.992 8.81669 12.992C8.65002 12.992 8.49169 12.9253 8.37502 12.8087L6.01669 10.4503C5.77502 10.2087 5.77502 9.80866 6.01669 9.56699C6.25835 9.32533 6.65835 9.32533 6.90002 9.56699L8.81669 11.4837L13.1 7.20033C13.3417 6.95866 13.7417 6.95866 13.9834 7.20033C14.225 7.44199 14.225 7.83366 13.9834 8.08366Z"
                    fill="#0743A2"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-gray-700">
                Substitute driver approval
              </span>
            </li>
            <li className="flex items-center">
              <div className=" flex items-center justify-center mr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1.66699C5.40835 1.66699 1.66669 5.40866 1.66669 10.0003C1.66669 14.592 5.40835 18.3337 10 18.3337C14.5917 18.3337 18.3334 14.592 18.3334 10.0003C18.3334 5.40866 14.5917 1.66699 10 1.66699ZM13.9834 8.08366L9.25835 12.8087C9.14169 12.9253 8.98335 12.992 8.81669 12.992C8.65002 12.992 8.49169 12.9253 8.37502 12.8087L6.01669 10.4503C5.77502 10.2087 5.77502 9.80866 6.01669 9.56699C6.25835 9.32533 6.65835 9.32533 6.90002 9.56699L8.81669 11.4837L13.1 7.20033C13.3417 6.95866 13.7417 6.95866 13.9834 7.20033C14.225 7.44199 14.225 7.83366 13.9834 8.08366Z"
                    fill="#0743A2"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-gray-700">
                Drive history & rewards
              </span>
            </li>
          </ul>

          <button className="w-full py-3 bg-[#E6ECF6]  text-[#0743A2] rounded-full mt-4 transition-colors">
            Delete Plan
          </button>
        </div>
      </div>

      <div className="mt-20">
        <Link
          to="/add-item"
          className="flex items-center px-6 py-3 bg-[#0743A2] hover:bg-[#0743A2] text-white rounded-full transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Add New Subscription
        </Link>
      </div>
    </div>
  );
}
