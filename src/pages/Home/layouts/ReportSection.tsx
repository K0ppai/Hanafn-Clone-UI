import GroupCard from "../components/GroupCard";
import GroupLink from "../../../components/GroupLink";
import GroupBody from "../../../components/GroupBody";
import { anualImgSrc, esgImgSrc } from "../../../data/data";

const ReportSection = () => {
  return (
    <section className="translate-y-[-6rem]">
      <div className="list-none overflow-hidden rounded-[1rem] shadow-card lg:flex lg:gap-x-[40px] lg:overflow-visible lg:shadow-none">
        <div className="flex flex-col lg:w-[65.583%] lg:flex-row lg:overflow-hidden lg:rounded-[10px] lg:shadow-card">
          <GroupCard
            linkComponent={<GroupLink linkText="ESG REPORT" isReport={true} />}
            bodyComponent={
              <GroupBody
                firstText="2022년"
                secondText="연차 보고서"
                imgSrc={esgImgSrc}
                firstBtnLabel="PDF(국문)"
                secondBtnLabel="PDF(국문)"
                isReport={true}
              />
            }
            isReport={true}
            className="bg-white lg:h-[300px] lg:border-r-[0.5px]"
          />
          <GroupCard
            linkComponent={
              <GroupLink linkText="ANUAL REPORT" isReport={true} />
            }
            bodyComponent={
              <GroupBody
                firstText="2022년"
                secondText="연차 보고서"
                imgSrc={anualImgSrc}
                firstBtnLabel="Annual Report(Full)"
                secondBtnLabel="Annual Report(Only)"
                isReport={true}
              />
            }
            isReport={true}
            className="bg-white lg:h-[300px]"
          />
        </div>
        <GroupCard
          linkComponent={<GroupLink linkText="경영실적" isReport={true} />}
          bodyComponent={
            <GroupBody
              firstText="2022년"
              secondText="연차 보고서"
              firstBtnLabel="PDF"
              secondBtnLabel="Web Casting"
              isReport={true}
              isMic={true}
            />
          }
          isReport={true}
          className="lg:bg-reportMic lg:bg-lgSizeMic bg-lgPosGp bg-white shadow-card lg:h-[300px] lg:rounded-[10px]"
        />
      </div>
    </section>
  );
};

export default ReportSection;
