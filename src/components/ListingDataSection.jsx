import { Flex } from "antd";
import React, { useState } from "react";
import CardComponent from "./CardComponent";
import DetailsModal from "./DetailsModal";

export default function ListingDataSection({ peopleData }) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(false);

  console.log("Hi from Listing");
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <DetailsModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalData={modalData}
      />
      <Flex wrap gap="large" justify="center">
        {Array.isArray(peopleData.results) &&
          peopleData.results.map((pl) => (
            <CardComponent
              setModalData={setModalData}
              showModal={showModal}
              characterDetails={pl}
            />
          ))}
      </Flex>
    </>
  );
}
