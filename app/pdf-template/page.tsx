"use client";

import BottomHeaderSection from "@/components/pdf/BottomHeaderSectionPDF";
import CompanyInformationSection1PDF from "@/components/pdf/CompanyInformationSection1PDF";
import CompanyInformationSection2PDF from "@/components/pdf/CompanyInformationSection2PDF";
import CovidSectionPDF from "@/components/pdf/CovidSectionPDF";
import ExecutionConditionSection from "@/components/pdf/ExecutionConditionSectionPDF";
import FilesToCompanySectionPDF from "@/components/pdf/FilesToCompanySectionPDF";
import HeaderSectionPDF from "@/components/pdf/HeaderSectionPDF";
import InstructionsSectionPDF from "@/components/pdf/InstructionsSectionPDF";
import JointInspectionSectionPDF from "@/components/pdf/JointInspectionSectionPDF";
import OperationInformationSection from "@/components/pdf/OperationInformationSectionPDF";
import RescueOrganizationSectionPDF from "@/components/pdf/RescueOrganizationSectionPDF";
import RiskSectionPDF from "@/components/pdf/RiskSectionPDF";
import SignatureSectionPDF from "@/components/pdf/SignatureSectionPDF";
import SocialOfficeSectionPDF from "@/components/pdf/SocialOfficeSectionPDF";
import UniversityInformationSectionPDF from "@/components/pdf/UniversityInformationSectionPDF";
import { useEffect, useState } from "react";

export default function PdfTemplate() {
  const [data, setData] = useState<any>(null);

  /*
  useEffect(() => {
    const injected = (window as any).formData;
    setData(injected);

    console.log(data);
  }, []);
*/
  useEffect(() => {
    const injected = (window as any).formData;

    if (injected) {
      setData(injected);
    }
    console.log(data);
  }, []);

  if (!data) {
    return <div>Chargement PDF...</div>;
  }

  return (
    <>
      <div className="w-[210mm] mx-auto">
        <HeaderSectionPDF data={data} />
        <BottomHeaderSection data={data} />
        <OperationInformationSection data={data} />
        <ExecutionConditionSection data={data} />
        <UniversityInformationSectionPDF data={data} />
        <RescueOrganizationSectionPDF />
        <CompanyInformationSection1PDF data={data} />
        <CompanyInformationSection2PDF data={data} />
        <JointInspectionSectionPDF data={data} />
        <RiskSectionPDF data={data} />
        <CovidSectionPDF />
        <FilesToCompanySectionPDF data={data} />
        <SocialOfficeSectionPDF data={data} />
        <InstructionsSectionPDF />
        <SignatureSectionPDF data={data} />
      </div>
    </>
  );
}
