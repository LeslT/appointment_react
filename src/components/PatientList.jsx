import Patient from "./Patient";

const PatientList = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Patients List</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        manage your {""}
        <span className="text-indigo-600 font-bold">patients and dates</span>
      </p>
        <Patient/>
        <Patient/>
        <Patient/>
        <Patient/>
        <Patient/>
    </div>
  );
};

export default PatientList;
