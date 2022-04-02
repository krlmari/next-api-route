export enum SortingType {
  ASC = "asc",
  DESC = "desc",
}

export interface IPost {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface IOptions {
  sort: SortingType;
  filter: {
    name: string;
    value: string;
  };
}
