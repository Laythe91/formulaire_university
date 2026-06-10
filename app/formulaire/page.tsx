"use client";

import { use, useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const methods = useForm<FormData>({
    resolver: zodResolver(schema) as any,
    defaultValues: formDefaults,
    shouldUnregister: false,
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
    setIsSubmitting(true);

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
    a.download = "Plan-Prevention-.pdf";
    a.click();

    console.log(data);
    setIsSubmitting(false);
  };

  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(new Date().toLocaleDateString("fr-FR"));
  }, []);

  // POUR DEBUG
  /* const methodDebugZODFinal = () => {
    const data = methods.getValues();

    const result = schema.safeParse(data);

    console.log("RESULT =", result);
    console.log(methods.getValues().Risk.amiante);
    if (!result.success) {
      console.log("ERROR =", result.error.format());
      return;
    }

    console.log("VALID DATA =", result.data);
  };*/

  // POUR DEBUG
  /*
  const values = methods.watch();

  useEffect(() => {
    console.log("FORM VALUES:", values);
  }, [values]);
*/
  useEffect(() => {
    const accepted = sessionStorage.getItem("consignes_lues");

    //  console.log("accepted =", accepted);

    if (accepted !== "true") {
      router.replace("/");
      return;
    }
    /*   console.log(
      "sessionStorage avant suppression =",
      sessionStorage.getItem("consignes_lues"),
    );*/
    sessionStorage.removeItem("consignes_lues");
    /*   console.log(
      "sessionStorage après suppression =",
      sessionStorage.getItem("consignes_lues"),
    );*/
  }, [router]);

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
                                                  disabled={isSubmitting}
                                                  onClick={methods.handleSubmit(
                                                    onSubmit,
                                                  )}
                                                  className="bg-blue-600 text-white 
                                                  px-4 py-2 mt-10 mb-10 mx-auto 
                                                  flex rounded-lg transition-all 
                                                  duration-150 hover:bg-blue-700
                                                  active:scale-95 active:bg-blue-800"
                                                >
                                                  {isSubmitting
                                                    ? "Génération du PDF ..."
                                                    : "Valider"}
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
