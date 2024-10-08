export class Image {
    source: string;
    mimeType: string;

    constructor(src: string, mime: string) {
        this.source = src;
        this.mimeType = mime;
    }
}