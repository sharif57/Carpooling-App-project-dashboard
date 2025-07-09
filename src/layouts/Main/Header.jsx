import {  useNavigate } from "react-router-dom";
import { Badge } from "antd";
import profileImage from "../../assets/images/dash-profile.png";
import { TbBellRinging } from "react-icons/tb";

import { useUserProfileQuery } from "../../redux/features/useSlice";

const Header = () => {
  const navigate = useNavigate();
const {data} = useUserProfileQuery();

  



  return (

    <div className="w-full h-[88px] text-white flex justify-between items-center rounded-lg py-[16px] px-[32px] shadow-lg bg-[#0743A2] border border">
      <div className="text-start space-y-0.5">
        <p className="text-sm md:text-xl font-light">
          {`Welcome, ${data?.full_name}`}
        </p>
        <p className="text-sm md:text-xl">{"Have a nice day!"}</p>
      </div>
      <div className="flex gap-x-[41px]">
        <div
          onClick={() => navigate("/notifications")}
          className="relative flex items-center "
        >
          <Badge style={{ backgroundColor: "#000000", width: '20px', height: '20px', objectFit: 'contain' }} count={1}>
            <TbBellRinging
              style={{ cursor: "pointer" }}
              className={` w-6 h-6 rounded-full shadow-sm  font-bold transition-all`}
            />
          </Badge>
        </div>
        <div className="flex items-center">
          <div>
            <img src={profileImage} alt="" className="rounded-full h-[42px] w-[42px]" />
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Header;
