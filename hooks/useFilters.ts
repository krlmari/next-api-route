import { useMemo } from "react";
import { IOptions, IPost, SortingType } from "../types";

export const useFilters = (posts: IPost[], option: IOptions) => {
  const result = useMemo(
    () =>
      posts
        .filter((post) => post[option.filter.name].includes(option.filter.value))
        .sort((a, b) => {
          return option.sort === SortingType.ASC ? a.id - b.id : b.id - a.id;
        }),
    [posts, option]
  );

  return { result };
};
