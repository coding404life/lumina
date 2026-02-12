"use client";

const BookVideo = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <video src={videoUrl} controls className="w-full rounded-xl">
      <track kind="captions" srcLang="en" label="English" />
    </video>
  );
};
export default BookVideo;
