const Label = (props) => {
  const { htmllFor, children } = props;
  return (
    <label
      htmlFor={htmllFor}
      className="block text-slate-700 text-sm font-bold mb-2"
    >
      {children}
    </label>
  );
};

export default Label;
