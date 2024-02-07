import React from "react";
import GroupCard from "../components/GroupCard";
import GroupLink from "../../../components/GroupLink";
import GroupBody from "../../../components/GroupBody";

const ReportSection = () => {
  const esgImgSrc =
    "https://www.hanafn.com:8002/upload/common/upeditor/10000051/20230731//20230731075409661.jpg";
  const anualImgSrc =
    "https://www.hanafn.com:8002/upload/common/upeditor/10000080/20230524//20230524092725713.jpg";
  return (
    <section className="translate-y-[-6rem]">
      <div className="shadow-card list-none overflow-hidden rounded-[1rem]">
        <div className="flex flex-col">
          <GroupCard
            linkComponent={<GroupLink linkText="ESG REPORT" isReport={true} />}
            bodyComponent={
              <GroupBody
                firstText="2022년"
                secondText="지속가능경영보고서"
                imgSrc={esgImgSrc}
                firstBtnLabel="PDF(국문)"
                secondBtnLabel="PDF(국문)"
                isReport={true}
              />
            }
            isReport={true}
          />
          <GroupCard
            linkComponent={
              <GroupLink linkText="ANUAL REPORT" isReport={true} />
            }
            bodyComponent={
              <GroupBody
                firstText="2022년"
                secondText="지속가능경영보고서"
                imgSrc={anualImgSrc}
                firstBtnLabel="Annual Report(Full)"
                secondBtnLabel="Annual Report(Only)"
                isReport={true}
              />
            }
            isReport={true}
          />
        </div>
        <GroupCard
          linkComponent={<GroupLink linkText="경영실적" isReport={true} />}
          bodyComponent={
            <GroupBody
              firstText="2022년"
              secondText="지속가능경영보고서"
              firstBtnLabel="PDF"
              secondBtnLabel="Web Casting"
              isReport={true}
              isMic={true}
            />
          }
          isReport={true}
        />
      </div>
    </section>
  );
};

export default ReportSection;
