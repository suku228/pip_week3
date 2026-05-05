import { useEffect, useState } from "react";
import { type FetchData } from "./../types/FetchData";
import mockUserPermission from "../mock-data/userMock.json";
import type { UserRoleAndPermission } from "../types/UserRoleAndPermission";

export const useFetch = (url: string): FetchData => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<UserRoleAndPermission>({
    permissions: [],
    role: "",
  });
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    setLoading(true);
    setError(null);
    const fetchData = async () => {
      try {
        await fetch(url, { signal });
        const data: UserRoleAndPermission = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(mockUserPermission);
          }, 1000);
        });

        setData(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error && error?.name === "AbortError") {
          setError(new Error("jkh"));
          return;
        } else {
          setLoading(false);
          setError(error as Error);
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { error, data, isLoading };
};
