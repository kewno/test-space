export type SelectType = {
    value: number
    text: string
}

export type BrandType = {
    src?: string
    alt?: string
}

export type ProductType = {
    id: number
    src?: string
    alt: string
    name: string
    price: string
    article: string
}

export type BreadcrumbsItem = {
    id: number
    href: string
    text: string
}

export type BrendsProcessed = {
    items: DataBrendsItem[]
}

export type DataBrends = {
    items: DataBrendsItem[]
    _links: DataBrendsLinks
    _meta: DataBrendsMeta
}

export type DataBrendsItem = {
    id: number
    name: string
    slug: string
    thumbnail: DataBrendsItemThumbnail
}

export type DataBrendsItemThumbnail = {
    date_create: string
    id: number
    name: string
    path: string
    sizes: DataBrendsItemThumbnailSizes[]
}

export type DataBrendsItemThumbnailSizes = {
    height: number
    name: string
    path: string
    width: number
}

export type DataBrendsLinks = {
    first: DataBrendsLinksHref
    last: DataBrendsLinksHref
    next: DataBrendsLinksHref
    self:DataBrendsLinksHref
}

export type DataBrendsLinksHref = {
    href: string
}

export type DataBrendsMeta = {
    currentPage: number
    pageCount: number
    perPage: number
    totalCount: number
}