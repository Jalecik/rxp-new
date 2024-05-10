export interface IServiceDetail {
    id: number;
    name: string;
    description: string;
    image: string;
    videoData: IVideoData;
    comeback: string;
    metaData: IMetaData;
}

interface IVideoData {
    name: string;
    url: string;
    cover: string;
}

interface IMetaData {
    title: string;
    description: string;
    keywords: string;
    image: string;
}