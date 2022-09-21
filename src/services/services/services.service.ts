import type { Service } from "../../models/service.model";
import { makeGetRequest } from "../request/request.service";

const endPoint = "/services";

export async function getServices(): Promise<Service[]> {
    return await makeGetRequest(`${endPoint}/`);
}