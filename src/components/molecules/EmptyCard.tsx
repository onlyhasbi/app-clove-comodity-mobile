import nojobSrc from "../../assets/images/nodata.svg";
import React from "react";

const EmptyCard = () => (
  <div className="flex flex-col justify-center text-center space-y-8 bg-white py-12 px-8 mx-4 rounded-tr-[60px] rounded-bl-[60px] border-2 border-primary">
    <img src={nojobSrc} className={"w-full h-48"} alt={"No Data Image"} />
    <div>
      <h1 className={"font-[400] text-accent text-2xl"}>
        Data Tidak Ditemukan{" "}
      </h1>
    </div>
  </div>
);
export default EmptyCard;
