import { Tab } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useGroupStore } from "../store/groupStore";
import { useUserStore } from "../store/userStore";
import { CommandsData } from "../types";

import Button from "./ui/Button";
import Command from "./ui/Commands";

interface IPreviewData {
  id: number;
  groupName: string;
  commands: Array<ICommands>;
}
type ICommands = {
  id: number;
  text: string;
};
interface PreviewProps {
  children: React.ReactNode;
}
interface IGroup {
  id: number;

  groupName: string;
}

const Preview = ({ children }: PreviewProps) => {
  const getGroupData = useGroupStore((state) => state.getGroupData);

  const user = useUserStore((state) => state.user);
  const [groups, setGroups] = useState<Array<IGroup> | null>();

  return (
    <div className=" min-h-screen border p-8 md:p-0" id="preview">
      <Tab.Group
        // as={"form"}
        // className="flex gap-2"
        onChange={(index) => console.log(index)}
      >
        <div className="flex gap-2">
          <div className="flex w-56 flex-col ">
            <div className="mb-4 flex items-center justify-between border-b border-gray-300 p-2">
              <h1 className="text-2xl">Groups</h1>
              <Button>
                <PlusIcon className="icon" />
              </Button>
            </div>
            <Tab.List className="flex  flex-col items-start justify-start gap-2 border-r  "></Tab.List>
          </div>
          <Tab.Panels className="flex flex-1 flex-col ">
            <div className="flex items-center justify-between border-b border-gray-300 p-2">
              <h1 className=" text-2xl font-bold">React JS</h1>
              <Button>Add new command</Button>
            </div>
            {/* {getGroupData.map((item, i) => (
              <Tab.Panel key={item.id}>
                <TabPanel commands={getGroupData[i].command} />
              </Tab.Panel>
            ))} */}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
};

function TabPanel({ commands }: { commands: CommandsData | null }) {
  console.log("From tab panel", commands);
  return (
    <div className=" m-4  flex flex-col items-start gap-4">
      <div className="mb-8 flex flex-col ">
        <ul className="flex flex-col gap-2 ">
          {commands?.map(({ id, commandText }) => {
            return <Command key={id} text={commandText} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Preview;
