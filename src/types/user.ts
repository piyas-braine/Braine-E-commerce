export type TUser = {
    name: string;
    email: string;
    password?: string;
    accountType: "superAdmin" | "admin" | "seller" | "user";
    isSocialLogin: boolean;
    phoneNumber?: string;
    billingAddress?: string;
    shippingAddress?: string;
};