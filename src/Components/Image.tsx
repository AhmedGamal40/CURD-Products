interface IProps {
    imageUrl: string,
    alt: string,
    className: string
}
const Image = ({ imageUrl, alt, className }: IProps) => {
  return (
    <>
      <div>
        <img src={imageUrl} alt={alt} className={className} />
      </div>
    </>
  );
};

export default Image;