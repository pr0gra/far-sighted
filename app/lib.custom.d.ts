interface Document {
    onmousewheel: ((this: Document, ev: Event) => any) | null;
}

declare module "*.mp4" {
    const src: string;
    export default src;
 }