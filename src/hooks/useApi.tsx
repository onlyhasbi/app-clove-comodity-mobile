import { apiRequest } from "../services/api";
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "react-query";
import IRequest from "../interfaces/IRequest";

interface IPost<T> {
  name?: string;
  endpoint: string;
  request?: IRequest<T>;
  mutationOptions?: UseMutationOptions<T, any, T, any>;
  queryOptions?: UseQueryOptions<T, any, T, any>;

  onSuccessCallback?(data: any): void;

  onErrorCallback?(): void;
}

function getData<T>(
  data: IRequest<T> | undefined,
  endpoint: string,
  user: any,
) {
  const params = new URLSearchParams();
  // if (data?.filter) {
  //     Object.entries(data.filter).map((item) => {
  //         if (item[1] !== undefined)
  //             params.append(item[0], item[1] ? item[1].toString() : "")
  //     })
  // }

  return apiRequest({
    token: user?.token,
    method: "POST",
    endpoint: `${endpoint}`,
    responseType: "json",
    data: {
      ...data,
    },
  });
}

export function useGet<T>({
  name,
  endpoint,
  onSuccessCallback,
  onErrorCallback,
  request,
}: IPost<T>) {
  // const [user] = useLocalStorage("user");
  const user = {
    token: "9|hfIUyVes7Qhm2Y9OpnCiOBCzod59CwULLUYFhXhh",
  };

  return useQuery<T>(
    [name, request],
    () => {
      return getData(request, endpoint, user);
    },
    {
      onSuccess: (data) => {
        if (onSuccessCallback) onSuccessCallback?.(data);
      },
      onError: (error: any) => {
        // if (error?.response?.status === 500) {
        // }
      },
    },
  );
}

export function usePost<T>({ endpoint, mutationOptions }: IPost<T>) {
  // const [user] = useLocalStorage("user");
  const user = {
    token: "9|hfIUyVes7Qhm2Y9OpnCiOBCzod59CwULLUYFhXhh",
  };

  function storeData(data: T) {
    return apiRequest({
      token: user?.token,
      method: "POST",
      endpoint,
      data,
      responseType: "json",
    });
  }

  return useMutation(storeData, mutationOptions);
}
