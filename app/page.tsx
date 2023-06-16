import Image from "next/image";
import { Card } from "@tremor/react";
import MetricandText from "@/components/MetricandText";
import KpiCardGrid from "@/components/KpiCardGrid";
import Navbar from "@/components/Navbar";
import NavbarBars3 from "@/components/NavbarBars3";
import SwiperComponent from "@/components/SwiperComponent";
import TanstackTable from "@/components/TanstackTable";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <MetricandText />
      <KpiCardGrid /> */}
      <Navbar />
      <SwiperComponent />
      <TanstackTable />
      {/* <NavbarBars3 /> */}
    </div>
  );
}
