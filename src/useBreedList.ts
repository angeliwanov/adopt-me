import { QueryStatus, useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";
import { Animal } from "./APIResponsesTypes";

export default function useBreedList(animal: Animal) {
  const result = useQuery(["breeds", animal], fetchBreedList);

  return [result?.data?.breeds ?? [], result.status] as [string[], QueryStatus];
}
