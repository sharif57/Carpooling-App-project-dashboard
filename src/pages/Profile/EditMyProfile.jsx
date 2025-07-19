import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useUserProfileQuery, useUpdateProfileMutation } from "../../redux/features/useSlice";
import dashProfile from "../../assets/images/dashboard-profile.png";

const EditMyProfile = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError, error, refetch } = useUserProfileQuery();
  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();
  const [form] = Form.useForm();

  // Set initial form values when data is fetched
  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        name: data.full_name,
        email: data.email,
      });
    }
  }, [data, form]);

  const onFinish = async (values) => {
    try {
      await updateProfile({ full_name: values.name }).unwrap();
      message.success("Profile updated successfully!");
      navigate(-1); // Adjust the route as needed
      refetch();
    } catch (err) {
      message.error("Failed to update profile. Please try again.");
    }
  };

  const onFinishFailed = () => {
    message.error("Please correct the errors in the form.");
  };

  if (isLoading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  if (isError) {
    return <div className="p-4 text-center text-red-500">Error: {error?.data?.message || "Failed to load profile."}</div>;
  }

  if (!data) {
    return <div className="p-4 text-center">No profile data available.</div>;
  }

  return (
    <div className="p-4">
      <div className="flex items-center gap-2 text-xl mb-4">
        <FaAngleLeft onClick={() => navigate(-1)} className="cursor-pointer" />
        <h1>Personal Information</h1>
      </div>
      <div className="rounded-lg py-4 border border-gray-200 shadow-lg mt-8 bg-white">
        <div className="space-y-6 min-h-[83vh]">
          <h3 className="text-2xl text-black mb-4 pl-5 border-b-2 border-gray-200 pb-3">
            Personal Information
          </h3>
          <div className="w-full">
            <Form
              form={form}
              name="profile"
              layout="vertical"
              className="w-full grid grid-cols-12 gap-x-10 px-14 py-8"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              initialValues={{
                name: data.full_name,
                email: data.email,
              }}
            >
              <div className="col-span-3 space-y-6">
                <div className="min-h-[300px] flex flex-col items-center justify-center p-8 border border-black bg-gray-50">
                  <div className="my-2">
                    <img
                      src={dashProfile}
                      alt="Profile"
                      className="h-28 w-28 rounded-full border-4 border-black"
                    />
                  </div>
                  <h5 className="text-lg text-gray-800">Profile</h5>
                  <h4 className="text-2xl text-gray-800">Admin</h4>
                </div>
              </div>
              <div className="col-span-9 space-y-4 w-full">
                <Form.Item
                  className="text-lg font-medium text-black"
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                    { min: 2, message: "Name must be at least 2 characters" },
                  ]}
                >
                  <Input
                    size="large"
                    className="h-[53px] rounded-lg"
                    placeholder="Enter your name"
                  />
                </Form.Item>
                <Form.Item
                  className="text-lg font-medium text-black"
                  label="Email"
                  name="email"
                >
                  <Input
                    readOnly
                    size="large"
                    className="h-[53px] rounded-lg bg-gray-100"
                    placeholder="Your email"
                  />
                </Form.Item>
                <Form.Item className="flex justify-end pt-4">
                  <Button
                    type="primary"
                    size="large"
                    htmlType="submit"
                    loading={isUpdating}
                    className="px-8 bg-black text-white hover:bg-black/90 rounded-full font-semibold"
                  >
                    Save Changes
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMyProfile;