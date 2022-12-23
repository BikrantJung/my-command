export interface SingleGroupData {
  groupName: string;
  id: number;
  command: CommandsData | null;
}
export type GroupsData = Array<SingleGroupData>;
export interface SingleCommand {
  id: number;
  created_at: string;
  commandText: string;
  groupId: number;
}
export type CommandsData = Array<SingleCommand>;
