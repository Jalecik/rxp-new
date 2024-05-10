export interface IOrganizationsData  {
    data: IOrganization[]
}
export interface IOrganization {
    id: number,
    image: string,
    name: string,
    description: string,
    serviceCount: number,
    slug: string
}