import { BaseUrl } from "./Base_url";

const mlm = BaseUrl;
export const config = {
    GET_ALL_PRODUCTS: `${mlm}getProducts`,
    ADD_MEMBERSHIP_REQUEST: `${mlm}memberdhip/request`,
    GET_TOTAL_AMOUNT: `${mlm}getTotalAmount`,
    GET_TOTAL_USER: `${mlm}getTotalUser`,
    GET_TOTAL_MEMBERSHIP: `${mlm}getTotalMembership`
}
