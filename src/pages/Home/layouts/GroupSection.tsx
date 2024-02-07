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
              firstText="Finance that grows together"
              secondText="and shares happiness"
            />
          }
          className="h-[24rem] bg-hana bg-sizeGroup bg-PosGp shadow-card"
        />
        <GroupCard
          linkComponent={<GroupLink linkText="Hana Financial Group" />}
          bodyComponent={
            <GroupBody
              secondText="211 networks in 25 regions around the world"
            />
          }
          className="h-[24rem] bg-global bg-sizeGroup bg-PosGp shadow-card"
        />
        <GroupCard
          linkComponent={<GroupLink linkText="Stock price information" />}
          bodyComponent={<GroupBody isStock={true} />}
          className="h-[26rem] bg-[#effbf7] bg-stock bg-sizeStock bg-right-bottom shadow-card"
        />
      </ul>
    </section>
  );
};

export default GroupSection;
