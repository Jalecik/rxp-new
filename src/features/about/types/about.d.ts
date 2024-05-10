export type IStatFooter = {
    totalService: number | string;
    totalVisits: number |string;
    totalAppeal: number | string;
};


export type IReportDetails = {
    image: null | string;
    name: string | null;
    description: string;
    date: string | null;
    metaData: IMetaData;
    files: IFiles[];
};

export type IMetaData = {
    title: string;
    description: string;
    keywords: string;
    image: string;
}

export type IFiles = {
    id: string | number;
    file: string;
    fileType: string;
    fileSize: string;
    fileName: string;
    fileUrl: string;
}