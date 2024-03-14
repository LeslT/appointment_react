const Patient = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Name: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Owner: {""}
        <span className="font-normal normal-case">Les</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Email: {""}
        <span className="font-normal normal-case">correo@correo.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Date: {""}
        <span className="font-normal normal-case">10 Diciembre 2022</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Symptoms: {""}
        <span className="font-normal normal-case">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          impedit placeat non hic error animi accusamus commodi ex velit, beatae
          omnis sed blanditiis voluptas ducimus aut illum officia harum maxime.
        </span>
      </p>
    </div>
  );
};

export default Patient;
