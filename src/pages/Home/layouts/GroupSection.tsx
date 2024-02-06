import React from "react";
import GroupCard from "../components/GroupCard";

const GroupSection = () => {
  return (
    <section>
      <ul className="flex flex-col gap-y-[4rem]">
        <GroupCard
          linkText="Hana Financial Group"
          firstText="Finance that grows together"
          secondText="and shares happiness"
          className="bg-hana bg-PosGp bg-sizeGroup h-[24rem]"
          isStock={false}
        />
        <GroupCard
          linkText="Hana Financial Group"
          secondText="211 networks in 25 regions around the world"
          className="bg-global bg-PosGp bg-sizeGroup h-[24rem]"
          isStock={false}
        />
        <GroupCard
          linkText="Stock price information"
          isStock={true}
          className="bg-stock bg-sizeStock bg-[#effbf7] bg-right-bottom h-[26rem]"
        />
      </ul>
    </section>
  );
};

export default GroupSection;
