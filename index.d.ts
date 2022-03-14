export function diff (originalObj: object, updatedObj: object): object

export function addedDiff (originalObj: object, updatedObj: object): object

export function deletedDiff (originalObj: object, updatedObj: object): object

export function updatedDiff (originalObj: object, updatedObj: object): object

export interface DetailDiffResult { 
  added: object;
  deleted: object;
  updated: object;
}

export function detailedDiff (originalObj: object, updatedObj: object): DetailDiffResult

export interface Change {
  type: string;
  path: Array<string>;
  from: any;
  to: any;
}

export type Changelog = Array<Change>;

export function detailToChangelog (detailDiff: DetailDiffResult, lhs: object): Changelog

export function changelogedDiff (originalObj: object, updatedObj: object): Changelog