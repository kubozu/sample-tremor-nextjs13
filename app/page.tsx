import Image from "next/image";
import { Card } from "@tremor/react";
import MetricandText from "@/components/MetricandText";
import KpiCardGrid from "@/components/KpiCardGrid";

export default function Home() {
  return (
    <div>
      <MetricandText />
      <KpiCardGrid />
    </div>
  );
}
