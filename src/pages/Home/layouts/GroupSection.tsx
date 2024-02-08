import GroupBody from "../../../components/GroupBody";
import GroupLink from "../../../components/GroupLink";
import GroupCard from "../components/GroupCard";

const GroupSection = () => {
  return (
    <section className="mb-[4rem] translate-y-[-6rem]">
      <ul className="flex flex-col gap-[4rem] lg:flex-row">
        <GroupCard
          linkComponent={<GroupLink linkText="Hana Financial Group" />}
          bodyComponent={
            <GroupBody
              firstText="함께 성장하며"
              secondText="행복을 나누는 금융"
            />
          }
          className="h-[24rem] bg-hana bg-sizeGroup bg-PosGp shadow-card lg:bg-lgPosGp lg:bg-lgSizeGp"
        />
        <GroupCard
          linkComponent={<GroupLink linkText="Hana Financial Group" />}
          bodyComponent={
            <GroupBody
              firstText="전 세계 25개 지역"
              secondText="211개의 네트워크"
            />
          }
          className="h-[24rem] bg-global bg-sizeGroup bg-PosGp shadow-card lg:bg-lgPosGp lg:bg-lgSizeGp"
        />
        <GroupCard
          linkComponent={<GroupLink linkText="Stock price information" />}
          bodyComponent={<GroupBody isStock={true} />}
          className="h-[26rem] bg-[#effbf7] bg-stock bg-sizeStock bg-right-bottom shadow-card lg:bg-lgSizeStock lg:bg-right-bottom"
        />
      </ul>
    </section>
  );
};

export default GroupSection;
