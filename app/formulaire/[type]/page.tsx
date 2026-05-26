"use client";

import { use, useEffect, useState } from "react";
import {
  useForm,
  FormProvider,
  Resolver,
  SubmitHandler,
} from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { schema } from "@/schema/form.schema";
import { formDefaults } from "@/app/defaults/form.defaults";
import { FormData } from "@/types/form.type";
import { Button } from "@/components/ui/button";

export default function Page({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = use(params);
  const methods = useForm<FormData>({
    resolver: zodResolver(schema) as any,
    defaultValues: formDefaults,
  });

  // 1. On écoute la valeur de l'input "Nom de société"
  const HeaderState = methods.watch("Header.state");
  const OperationSectionState = methods.watch("Operation.state");
  const ExecutionConditionState = methods.watch("Condition.state");
  const universityState = methods.watch("UniversityInformation.state");
  const EntrepriseRenseignementState = methods.watch(
    "Entreprise.renseignement.state",
  );
  const CompanyInformationState = methods.watch("Entreprise.information.state");
  const InspectionState = methods.watch("Inspection.state");
  const RiskState = methods.watch("Risk.state");
  const DocumentState = methods.watch("Document.state");
  const GlobalState = methods.watch("Global.state");

  useEffect(() => {
    const isValid = [
      HeaderState,
      OperationSectionState,
      ExecutionConditionState,
      universityState,
      EntrepriseRenseignementState,
      CompanyInformationState,
      InspectionState,
      DocumentState,
    ].every(Boolean);

    methods.setValue("Global.state", isValid, {
      shouldDirty: false,
    });
  }, [
    HeaderState,
    OperationSectionState,
    ExecutionConditionState,
    universityState,
    EntrepriseRenseignementState,
    CompanyInformationState,
    InspectionState,
    DocumentState,
  ]);

  const onSubmit = async (data: FormData) => {
    console.log("PECORE");
    const res = await fetch("/api/pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const blob = await res.blob();

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "document.pdf";
    a.click();

    console.log(data);
  };

  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(new Date().toLocaleDateString("fr-FR"));
  }, []);

  /*
const values = methods.watch();

  useEffect(() => {
    console.log("FORM VALUES:", values);
  }, [values]);
*/
  const values = methods.watch();

  return (
    <div className="w-[210mm] mx-auto mt-4">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {/* =========================
            HEADER
        ========================= */}
          <HeaderSection date={date} />

          {/* =========================
            OPERATION
        ========================= */}
          {HeaderState && (
            <>
              <BottomHeaderSection />
              <OperationInformationSection date={date} />

              {/* =========================
                EXECUTION
            ========================= */}
              {OperationSectionState && (
                <>
                  <ExecutionConditionSection />

                  {/* =========================
                    UNIVERSITY
                ========================= */}
                  {ExecutionConditionState && (
                    <>
                      <UniversityInformationSection />

                      {/* =========================
                        ENTREPRISE
                    ========================= */}
                      {universityState && (
                        <>
                          <RescueOrganizationSection />
                          <CompanyInformationSection1 />

                          {/* =========================
                            ENTREPRISE INFOS
                        ========================= */}
                          {EntrepriseRenseignementState && (
                            <>
                              <CompanyInformationSection2 />

                              {/* =========================
                                INSPECTION
                            ========================= */}
                              {CompanyInformationState && (
                                <>
                                  <JointInspectionSection />

                                  {/* =========================
                                    RISKS
                                ========================= */}
                                  {InspectionState && (
                                    <>
                                      <RiskSection />

                                      {/* =========================
                                        DOCUMENTS
                                    ========================= */}
                                      {RiskState && (
                                        <>
                                          <CovidSection />
                                          <FilesToCompanySection />

                                          {/* =========================
                                            FINAL PART
                                        ========================= */}
                                          {DocumentState && (
                                            <>
                                              <SocialOfficeSection />
                                              <InstructionsSection />
                                              <SignatureSection />

                                              {/* =========================
                                                SUBMIT
                                            ========================= */}
                                              {GlobalState && (
                                                <Button
                                                  onClick={methods.handleSubmit(
                                                    onSubmit,
                                                  )}
                                                  className="bg-blue-600 flex text-white px-4 py-2 mt-10 mb-10 mx-auto"
                                                >
                                                  Valider
                                                </Button>
                                              )}
                                            </>
                                          )}
                                        </>
                                      )}
                                    </>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
          <div className="mt-10"></div>
        </form>
      </FormProvider>
    </div>
  );
}
