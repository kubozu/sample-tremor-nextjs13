"use client";

import { useState } from "react";
import { Card, Grid, Tab, TabList, Text, Title } from "@tremor/react";

function KpiCardGrid() {
  const [selectedView, setSelectedView] = useState("1");
  return (
    <main className="bg-slate-50 p-6 sm:p-10">
      <Title>DashBoard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>
      <TabList
        defaultValue="1"
        onValueChange={(value) => setSelectedView(value)}
        className="mt-6"
      >
        <Tab value="1" text="Overview" />
        <Tab value="2" text="Detail" />
      </TabList>
      {selectedView === "1" ? (
        <>TEXT {selectedView}</>
      ) : (
        <>TEXT {selectedView}</>
      )}
    </main>
  );
}

export default KpiCardGrid;
