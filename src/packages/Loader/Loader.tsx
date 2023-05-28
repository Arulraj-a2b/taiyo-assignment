const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        height: "100vh",
        width: "100%",
        backgroundColor: "rgb(0 0 0 / 50%)",
        top: 0,
        left: 0,
        zIndex: 99999,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
      }}
    >
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" />
      </div>
    </div>
  );
};

export default Loader;
