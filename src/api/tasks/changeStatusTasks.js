import request, { HttpMethod } from "../request";
import { CONFIG } from "../../configs/configs";

export const changeStatusTask = (task) =>
  request({
    method: HttpMethod.PUT,
    url: `${CONFIG.apiUrl}/tasks/${task.taskId}`,
  });
