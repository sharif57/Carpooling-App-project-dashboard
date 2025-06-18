import DashboardHomeTable from "../../../Components/DashboardHomeTable";

const DashboardHome = () => {
  return (
    <div className="space-y-[24px]">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-x-10 lg:gap-x-10  gap-y-10 ">
        <div className=" flex items-center justify-center gap-6 rounded-lg bg-white  ">
          <div className=" ">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="80" height="80" rx="16" fill="#0743A2" />
              <path
                opacity="0.587821"
                d="M50.0004 32.8887C52.7615 32.8889 55.0001 35.2765 55.0004 38.2217C55.0004 41.1671 52.7616 43.5554 50.0004 43.5557C47.2389 43.5557 45.0004 41.1672 45.0004 38.2217C45.0006 35.2764 47.2391 32.8887 50.0004 32.8887ZM35.0004 24C38.6821 24.0002 41.6664 27.1841 41.6664 31.1113C41.6663 35.0385 38.682 38.2225 35.0004 38.2227C31.3185 38.2227 28.3335 35.0386 28.3334 31.1113C28.3334 27.184 31.3185 24 35.0004 24Z"
                fill="white"
              />
              <path
                d="M34.9727 41.7778C42.9523 41.778 49.5077 45.8547 49.9962 54.5776C50.0156 54.9251 49.9963 56.0005 48.7442 56.0005H21.213C20.7951 56.0005 19.9662 55.0389 20.0011 54.5767C20.6471 46.0919 27.1037 41.7778 34.9727 41.7778ZM49.336 45.3364C55.013 45.403 59.6482 48.4628 59.9972 54.9331C60.0112 55.1937 59.9971 56.0005 59.0929 56.0005H52.6661C52.6661 51.9996 51.4271 48.3072 49.336 45.3364Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="text-center">
            <h3 className="text-[20px]">{"Total users"}</h3>
            <h3 className=" text-[#494747] font-medium text-[48px]">400</h3>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 px-[24px]  py-[20px] rounded-lg space-y-3 bg-white w-96 md:w-full">
          <div className="">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="80" height="80" rx="16" fill="#0743A2" />
              <path
                d="M26 54H56C57.1046 54 58 54.8954 58 56C58 57.1046 57.1046 58 56 58H24C22.8954 58 22 57.1046 22 56V24C22 22.8954 22.8954 22 24 22C25.1046 22 26 22.8954 26 24V54Z"
                fill="white"
              />
              <path
                opacity="0.5"
                d="M33.459 45.3677C32.7036 46.1735 31.4379 46.2144 30.6321 45.4589C29.8262 44.7035 29.7854 43.4378 30.5409 42.632L38.0409 34.632C38.7715 33.8526 39.9856 33.785 40.7982 34.4785L46.7177 39.5297L54.4302 29.7605C55.1146 28.8936 56.3723 28.7456 57.2392 29.4301C58.1062 30.1145 58.2542 31.3722 57.5697 32.2391L48.5697 43.6391C47.8667 44.5296 46.5647 44.6576 45.7017 43.9212L39.6536 38.7602L33.459 45.3677Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="text-center">
            <h3 className="text-[20px]">{"Total Earnings"}</h3>
            <h3 className=" text-[#494747] font-medium text-[48px]">$89,000</h3>
          </div>
        </div>
      </div>
      {/* <BarChartComponent /> */}
      <DashboardHomeTable />
    </div>
  );
};

export default DashboardHome;
