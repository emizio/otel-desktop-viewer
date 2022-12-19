import React from "react";
import { Flex, Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react";

import { SpanData } from "../../types/api-types";
import { FieldsPannel } from "./fields-pannel";
import { EventsPanel } from "./events-panel";

type DetailViewProps = {
  span: SpanData | undefined;
};

export function DetailView(props: DetailViewProps) {
  let { span } = props;
  if (!span) {
    return <div></div>;
  }
  let numEvents = span.events.length;
  let numLinks = span.links.length;

  return (
    <Flex
      grow="0"
      shrink="1"
      basis="350px"
      height="100vh"
    >
      <Tabs
        colorScheme="pink"
        margin={3}
        overflowY="scroll"
        size="sm"
        variant="soft-rounded"
        width="100vw"
      >
        <TabList>
          <Tab>Fields</Tab>
          <Tab isDisabled={numEvents === 0}>Events({numEvents})</Tab>
          <Tab isDisabled={numLinks === 0}>Links({numLinks})</Tab>
        </TabList>
        <TabPanels>
          <FieldsPannel span={span} />
          <EventsPanel
            events={span.events}
            spanStartTime={span.startTime}
          />
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
