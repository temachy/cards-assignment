import notFoundImage from "./assets/image-not-found.png";

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

const Image = (props: ImageProps) => (
  <img
    {...props}
    onError={(event) => {
      event.currentTarget.src = notFoundImage;
      event.currentTarget.onerror = null;
    }}
    loading="lazy"
  />
);

export default Image;
