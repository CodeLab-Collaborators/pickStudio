import useSWR from "swr";
import { getAllStudio } from "../api/studioAPI";

const studioHooks = () => {
  const { data: allStudio, isLoading } = useSWR(
    `view-all-studio`,
    getAllStudio
  );

  return { allStudio, isLoading };
};

export default studioHooks;
