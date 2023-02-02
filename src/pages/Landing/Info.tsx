import React from "react";

import CustomButton from "~/components/CustomButton";

import InfoItem from "./components/InfoItem";

function Info() {
  return (
    <div className="container mx-auto">
      <h2 className="section-title">Info</h2>
      <div>
        <InfoItem
          title="2022ウィンターコレクション発表のお知らせ"
          date="2022/10/01"
        />
        <InfoItem
          title="2022ウィンターコレクション発表のお知らせ"
          date="2022/10/01"
        />
        <InfoItem
          title="2022ウィンターコレクション発表のお知らせ"
          date="2022/10/01"
        />
      </div>
      <div className="flex justify-center">
        <CustomButton title="View more" />
      </div>
    </div>
  );
}

export default Info;
