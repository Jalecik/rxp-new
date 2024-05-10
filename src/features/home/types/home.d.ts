export type IStatFooter = {
    totalService: number | string;
    totalVisits: number |string;
    totalAppeal: number | string;
};
export type ISateTopics = {
    id: string;
    name: string;
};
export type ICallOrder = {
    phone: string;
}

export type ISendApplication = {
    phone: string;
    email: string;
    subject: string | number;
    text: string;
}


export type CheckOtp = {
    id: string;
    otp: string;
}