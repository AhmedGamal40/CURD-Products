interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
  color: string; 
}

const CircleColors = ({ color, ...rest }: IProps) => {
  return (
    <span
      className={`block h-5 w-5 rounded-full cursor-pointer`} style={{ backgroundColor: color }} {...rest}
    />
  );
};

export default CircleColors;
