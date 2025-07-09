import { useState } from "react";
import { Table, Modal, Button } from "antd";
import { Eye } from "lucide-react";
import { useUserListQuery } from "../../../redux/features/useSlice";

const User = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const { data: apiData, isLoading, isError } = useUserListQuery();
  
  console.log(apiData, "User List Data");

  const showModal = (data) => {
    setSelectedUser(data);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const columns = [
    {
      title: "#SI No.",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => index + 1,
    },
    {
      title: "User Name",
      dataIndex: "full_name",
      key: "full_name",
      render: (text) => text || "N/A",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Subscription",
      dataIndex: "subscription_plan",
      key: "subscription_plan",
      render: (text) => text || "N/A",
    },
    {
      title: "Plan Expiry Date",
      dataIndex: "plan_expired_date",
      key: "plan_expired_date",
      render: (text) => text || "N/A",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Button
          type="link"
          onClick={() => showModal(record)}
        >
          <div className="flex items-center gap-4">
            <Eye />
          </div>
        </Button>
      ),
    },
  ];

  // Transform API data to match table structure
  const tableData = apiData?.data?.map(user => ({
    ...user,
    key: user.id, // Add key for React
    userId: `U-${user.id}`,
  })) ;

  return (
    <div>
      <div className="rounded-lg border py-4 mt-8 recent-users-table text-white bg-white">
        <h1 className="text-2xl font-semibold mb-4 text-black pl-4">User List</h1>
        
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error loading data</div>}
        
        <Table
          columns={columns}
          dataSource={tableData}
          pagination={{ position: ["bottomCenter"] }}
          className="rounded-2xl text-white"
          rowKey="id"
          loading={isLoading}
        />

        <Modal
          title={
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-center">
                User Details
              </span>
            </div>
          }
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
          className="custom-modal"
        >
          {selectedUser && (
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">User ID:</span>
                <span>{selectedUser.userId}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Name:</span>
                <span>{selectedUser.full_name || "N/A"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Email:</span>
                <span>{selectedUser.email}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Contact Number:</span>
                <span>{selectedUser.contact_number || "N/A"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Subscription Plan:</span>
                <span>{selectedUser.subscription_plan || "N/A"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Plan Expiry Date:</span>
                <span>{selectedUser.plan_expired_date || "N/A"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Total Rides:</span>
                <span>{selectedUser.total_rides}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Role:</span>
                <span>{selectedUser.role}</span>
              </div>

              <Button
                className="bg-[#101010] py-6 text-white w-full hover:bg-gray-800"
              >
                Download
              </Button>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default User;