const MDXComponents = {
  //p: (props: any) => <p style={{ color: "red" }} {...props} />,

  // This curretly is not taking effect for some reason
  inlineCode: (props: any) => (
    <code style={{ backgroundColor: "blue" }} {...props} />
  ),
  // code: (props: any) => (
  //   <code style={{ backgroundColor: "lightblue" }} {...props} />
  // ),
};

export default MDXComponents;
