import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { useTermsQuery } from "../../redux/features/privacySlice";

const TermsConditions = () => {

  const navigate = useNavigate();
  
  const {data} =useTermsQuery();
  console.log(data, "Terms Conditions Data");

  return (
    <>
      <div className="flex items-center gap-2 text-xl">
        <FaAngleLeft />
        <h1>Terms & Condition</h1>
      </div>
      <div className="rounded-lg py-4 border-lightGray border-2 shadow-lg mt-8 bg-white">
        <div className="space-y-[24px] min-h-[83vh] bg-light-gray rounded-2xl">
          <h3 className="text-2xl text-black mb-4 border-b-2 border-lightGray/40 pb-3 pl-16">
            Terms & Condition
          </h3>
          <div className="w-full px-16">
          
            <div className="space-y-5 text-black text-sm">
              <p dangerouslySetInnerHTML={{ __html: data?.data.map((item) => item?.content).join("") }} />
            </div>
            <div className="flex justify-end pt-4">
              <Button
                onClick={() => navigate(`edit`)}
                size="large"
                type="primary"
                className="px-8 bg-black text-white hover:bg-black/90 rounded-full font-semibold w-1/4"
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;
