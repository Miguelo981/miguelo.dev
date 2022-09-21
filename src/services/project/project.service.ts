import type { ProjectThumbnail } from "../../models/project-thumbnail.model";
import { makeGetRequest } from "../request/request.service";

const endPoint = "/project-thumbnail";

export async function getProjects(): Promise<ProjectThumbnail[]> {
    return await makeGetRequest(`${endPoint}/`);
}

export async function getProjectById(id: string): Promise<ProjectThumbnail> {
    return await makeGetRequest(`${endPoint}/${id}`);
}