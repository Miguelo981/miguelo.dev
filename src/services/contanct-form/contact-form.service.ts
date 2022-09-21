import type { ContactMeForm } from "../../models/forms/contact-me.model";
import { makePostRequest } from "../request/request.service";

const endPoint = "/contact-form";

export async function createForm(form: ContactMeForm) {
    return await makePostRequest(`${endPoint}/`, form);
}