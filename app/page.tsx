import Image from "next/image";
import { Card } from "@tremor/react";
import MetricandText from "@/components/MetricandText";
import KpiCardGrid from "@/components/KpiCardGrid";
import Navbar from "@/components/Navbar";
import NavbarBars3 from "@/components/NavbarBars3";
import SwiperComponent from "@/components/SwiperComponent";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <MetricandText />
      <KpiCardGrid /> */}
      <Navbar />
      <div className="min-h-screen">
        <SwiperComponent />
      </div>
      {/* <NavbarBars3 /> */}
    </div>
  );
}
