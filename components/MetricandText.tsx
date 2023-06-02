import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";
import { TagIcon } from "@heroicons/react/solid";

function MetricandText() {
  return (
    <Card className="max-w-xs mx-auto">
      {/** tailwindでのfelx */}
      <Text className="flex items-center">
        <TagIcon className="w-5 h-5" />
        Sales
      </Text>
      <Metric>$ 34,743</Metric>
      {/** tremorにFlexタグもある */}
      <Flex className="mt-4">
        <Text>32% of annual target</Text>
        <Text>$ 225,000</Text>
      </Flex>
      <ProgressBar percentageValue={32} className="mt-2" />
    </Card>
  );
}

export default MetricandText;
