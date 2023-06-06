import Image from "next/image";
import { Card } from "@tremor/react";
import MetricandText from "@/components/MetricandText";
import KpiCardGrid from "@/components/KpiCardGrid";
import Navbar from "@/components/Navbar";
import NavbarBars3 from "@/components/NavbarBars3";

export default function Home() {
  return (
    <div className="">
      <MetricandText />
      <KpiCardGrid />
      <Navbar />
      <NavbarBars3 />
    </div>
  );
}
