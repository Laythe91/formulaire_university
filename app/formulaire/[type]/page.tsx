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
import { schema } from "@/schema/form.schema";

type FormData = {
  Entreprise: {
    titulaire: {
      name: string;
    };
  };

  Operation: {
    state: boolean;
    annuel: { state: boolean };
    ponctuel: { state: boolean };
    plus400h: { state: boolean };
    danger: { state: boolean };
    date: {
      start: string;
      end: string;
    };
    objet: string;
  };
  Condition: {
    state: boolean;

    "1": { state: boolean };
    "2": { state: boolean };
    "3": { state: boolean };
    "4": { state: boolean };
    "5": { state: boolean };
    "6": { state: boolean };
  };
  UniversityInformation: {
    state: boolean;
    nom: string;
    phone1: string;
    phone2: string;
  };
};

export default function Page({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = use(params);
  const methods = useForm<FormData>({
    resolver: zodResolver(schema) as any,
    defaultValues: {
      Entreprise: {
        titulaire: {
          name: "",
        },
      },
      Operation: {
        state: false,
        annuel: { state: false },
        ponctuel: { state: false },
        plus400h: { state: false },
        danger: { state: false },
        date: {
          start: "",
          end: "",
        },
        objet: "",
      },
      Condition: {
        state: false,

        "1": { state: false },
        "2": { state: false },
        "3": { state: false },
        "4": { state: false },
        "5": { state: false },
        "6": { state: false },
      },

      UniversityInformation: {
        state: false,
        nom: "",
        phone1: "",
        phone2: "",
      },
    },
  });
  // 1. On écoute la valeur de l'input "Nom de société"
  const nomSociete = methods.watch("Entreprise.titulaire.name");
  const OperationSectionState = methods.watch("Operation.state");

  // 2. On vérifie si la valeur existe et fait au moins 2 caractères
  const afficheBottomOperation = nomSociete && nomSociete.trim().length >= 2;

  const ExecutionConditionState = methods.watch("Condition.state");

  const universityState = methods.watch("UniversityInformation.state");

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(new Date().toLocaleDateString("fr-FR"));
  }, []);

  const values = methods.watch();

  useEffect(() => {
    console.log("FORM VALUES:", values);
  }, [values]);

  return (
    <div className="w-[210mm] mx-auto mt-4">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <HeaderSection date={date} />

          {afficheBottomOperation && (
            <>
              <BottomHeaderSection />
              <OperationInformationSection date={date} />
            </>
          )}
          {OperationSectionState && <ExecutionConditionSection />}

          {ExecutionConditionState && <UniversityInformationSection />}

          {universityState && <RescueOrganizationSection />}
          {universityState && <CompanyInformationSection1 />}

          <CompanyInformationSection2 />
          <JointInspectionSection />

          <RiskSection />
          <CovidSection />
          <FilesToCompanySection />
          <SocialOfficeSection />
          <InstructionsSection />
          <SignatureSection />

          <button type="submit" className="bg-blue-600 text-white px-4 py-2">
            Valider
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
