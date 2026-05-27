"use client";

import CovidSectionPDF from "@/components/pdf/CovidSectionPDF";
import HeaderSectionPDF from "@/components/pdf/HeaderSectionPDF";
import { useEffect, useState } from "react";

export default function PdfTemplate() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const injected = (window as any).formData;
    setData(injected);
    console.log(data);
  }, []);

  if (!data) {
    return <div>Chargement PDF...</div>;
  }

  return (
    <>
      <div className="w-[210mm] mx-auto mt-4">
        <HeaderSectionPDF data={data} />
        <CovidSectionPDF />
      </div>
    </>
  );
}
