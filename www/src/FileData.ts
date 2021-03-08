type FileBase = {
  id: string;
  title: string;
  description: string;
  downloadUrl: string;
  createdDate: number;
};

type Picture = {
  // avifSrc?: string;
  // webpSrc?: string;
  imageSrc: string;
} & FileBase;

type Video = {
  // webmSrc?: string;
  videoSrc: string;
} & FileBase;

export type Content = FileBase | Picture | Video;