import Image from "next/image";
import { Card } from "@tremor/react";
import MetricandText from "@/components/MetricandText";
import KpiCardGrid from "@/components/KpiCardGrid";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
      <MetricandText />
      <KpiCardGrid />
      <Navbar />
    </div>
  );
}
