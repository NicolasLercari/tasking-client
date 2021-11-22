import request, { HttpMethod } from "../request";
import { CONFIG } from "../../configs/configs";

const defaultQuantity = 3;

const getTasksRequest = async ({ url }) => {
  const response = await request({
    method: HttpMethod.GET,
    url,
  });

  return response.data;
};

const getNextPage = async ({ url }) => {
  const responseData = await getTasksRequest({ url });

  return {
    tasks: responseData.results,
    totalCount: responseData.meta.totalCount,
    getNextPage: () => getNextPage({ url: responseData.meta.next }),
    hasNext: Boolean(responseData.meta.next),
  };
};

export const getTasks = async ({ quantity = defaultQuantity }) => {
  const responseData = await getTasksRequest({
    url: `${CONFIG.apiUrl}/tasks?quantity=${quantity}`,
  });

  return {
    tasks: responseData.results,
    totalCount: responseData.meta.totalCount,
    getNextPage: () => getNextPage({ url: responseData.meta.next }),
    hasNext: Boolean(responseData.meta.next),
  };
};
