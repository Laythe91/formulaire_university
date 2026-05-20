"use client";

import { use, useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import GeneralSection from "@/components/forms/GeneralSection";
import RiskSection from "@/components/forms/RiskSection";
import HeaderSection from "@/components/forms/HeaderSection";
import BottomHeaderSection from "@/components/forms/BottomHeaderSection";
import OperationInformationSection from "@/components/forms/OperationInformationSection";
import ExecutionConditionSection from "@/components/forms/ExecutionConditionSection";
import UniversityInformationSection from "@/components/forms/UniversityInformationSection";
import RescueOrganizationSection from "@/components/forms/RescueOrganizationSection";
import CompanyInformationSection1 from "@/components/forms/CompanyInformationSection1";
import CompanyInformationSection2 from "@/components/forms/CompanyInformationSection2";
import JointInspectionSection from "@/components/forms/JointInspectionSection";
import CovidSection from "@/components/forms/CovidSection";
import FilesToCompanySection from "@/components/forms/FilesToCompanySection";
import SocialOfficeSection from "@/components/forms/SocialOfficeSection";
import InstructionsSection from "@/components/forms/InstructionsSection";
import SignatureSection from "@/components/forms/SignatureSection";

const schema = z.object({
  entreprise: z.string().min(1, "Entreprise obligatoire"),

  responsable: z.string().min(1, "Responsable obligatoire"),
});

type FormData = z.infer<typeof schema>;

export default function Page({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = use(params);

  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(type);
    console.log(data);
  };
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(new Date().toLocaleDateString("fr-FR"));
  }, []);
  return (
    <div className="w-[210mm] mx-auto mt-4">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <HeaderSection />
          <BottomHeaderSection />
          <OperationInformationSection />
          <ExecutionConditionSection />
          <UniversityInformationSection />
          <RescueOrganizationSection />
          <CompanyInformationSection1 />
          <CompanyInformationSection2 />
          <JointInspectionSection />

          <RiskSection />
          <CovidSection />
          <FilesToCompanySection />
          <SocialOfficeSection />
          <InstructionsSection />
          <SignatureSection />

          <div className="text-red-500 text-sm">
            {methods.formState.errors.entreprise?.message}
          </div>

          <div className="text-red-500 text-sm">
            {methods.formState.errors.responsable?.message}
          </div>

          <button type="submit" className="bg-black text-white px-4 py-2">
            Valider
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
