interface Post{
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

type Partial<T> = {
    [key in keyof T] ?: T[key];
};

const draft: Partial<Post> = {
    title: "나중에",
    content:"초안",
}

type Required<T> = {
    [key in keyof T] -?: T[key];
}
const withThumbnailPost: Required<Post> = {
    title:"asfdas",
    tags:["ts"],
    content:"asfd",
    thumbnailURL:"asdfsa"
}

type Readonly<T> = {
    readonly [key in keyof T] : T[key];
}
const readonlyPost : Readonly<Post> = {
    title:"asfds",
    tags:[],
    content:""
}
