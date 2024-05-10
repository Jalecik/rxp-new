import { ReactHTML } from "react";

export interface IReward {
    list: Array<IRewardList>;
    title: string;
}

export interface IRewardList {
    image: StaticImageData;
    name: string;
    link: string;
}