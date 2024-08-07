interface Post{
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

type Pick<T,K extends keyof T> = {
    [key in K] : T[key];
}
const legacyPost: Pick<Post, "title"|"content"> = {
    title: "옛날글",
    content:""
}
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const noTitlepost: Omit<Post,"title"> = {
    content:"",
    tags:[],
    thumbnailURL:"",
}

type ThumbnailLegacy = {
    large : {
        url: string;
    };
    medium : {
        url: string;
    };
    small:{
        url: string;
    };
    watch:{
        url: string;
    }
}

type Record<K extends keyof any, V> = {
    [key in K] : V
}
type Thumbnail = Record<"large" | "medium" | "small" | "watch", {url : string, size:number}>