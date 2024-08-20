import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect } from "react";

export default function CardComponent({
  characterDetails,
  showModal,
  setModalData,
}) {

  useEffect(() => {
    return setModalData(false);
  }, []);
  
  console.log("hi from card component")
  return (
    <Card
      onClick={() => {
        setModalData(characterDetails);
        showModal();
      }}
      hoverable
      style={{
        width: 140,
      }}
      cover={
        <img
          alt="example"
          src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${characterDetails.name}`}
        />
      }
    >
      <Meta title={characterDetails.name} />
    </Card>
  );
}
