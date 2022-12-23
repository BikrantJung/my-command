import create from "zustand";
import { GroupsData } from "../types";
interface IGroup {
  getGroupData: GroupsData;
  setGroup: (groupData: GroupsData) => void;
  clearGroup: () => void;
}

export const useGroupStore = create<IGroup>()((set) => ({
  getGroupData: [],
  setGroup: (groupData: GroupsData) =>
    set(() => ({
      getGroupData: groupData,
    })), // Sets new group
  clearGroup: () => set({ getGroupData: [] }), // Remove the group after logged out
}));
