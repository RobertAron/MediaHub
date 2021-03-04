type FileBase = {
  uuid: string;
  title: string;
  description: string;
  downloadUrl: string;
  uploadedTimestamp: number;
};

type Picture = {
  avifSrc?: string;
  webpSrc?: string;
  mainSrc: string;
} & FileBase;

type Video = {
  webmSrc?: string;
  mp4: string;
} & Picture;

export type Content = FileBase | Picture | Video;


const db: { [key: string]: Content } = [
  {
    uuid: `${-3}`,
    title: "Title of the file",
    description:
      "This is a description. It can be a semi large length. It has info about this file and stuffs.",
    downloadUrl: "/sub-content/testVideo.mp4",
    uploadedTimestamp: 0,
    mainSrc: "/sub-content/testPhoto.jpg",
    mp4: "/sub-content/testVideo.mp4"
  },
  {
    uuid: `${-1}`,
    title: "yooo",
    description: "A picture of myself",
    downloadUrl: "/sub-content/testPhoto.jpg",
    uploadedTimestamp: 0,
    mainSrc: "/sub-content/testPhoto.jpg"
  },
  {
    uuid: `${-2}`,
    title: "yooo2",
    description: "A video",
    downloadUrl: "/sub-content/testVideo.mp4",
    uploadedTimestamp: 0,
    mainSrc: "/sub-content/testPhoto.jpg",
    mp4: "/sub-content/testVideo.mp4"
  },
  ...new Array(30).fill(null).map(
    (ele, index): Content => ({
      uuid: `b${index}`,
      title: `item ${index}`,
      description: "some description goes into this location",
      downloadUrl: "someurlToDownload",
      uploadedTimestamp: 0
    })
  )].reduce((acc, next) => {
    acc[next.uuid] = next
    return acc
  }, {} as { [key: string]: Content });


export {
  db
}