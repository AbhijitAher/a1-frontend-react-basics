import { Modal } from "antd";
import React from "react";

export default function DetailsModal({
  isModalOpen,
  setIsModalOpen,
  modalData,
}) {
  console.log("Hi from Details Modal")
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title={`Character Details: ${modalData.name}`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <p>Birth year: {modalData.birth_year}</p>
        <p>Gender: {modalData.gender}</p>
        <p>Eye color: {modalData.eye_color}</p>
      </Modal>
    </>
  );
}
