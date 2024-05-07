import { createContext } from "react";
// import MedicalRecords from "@/pages/MedicalRecords";

export const multiStepContext = createContext();

// const MedicalRecordStepContext = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [userData, setUserData] = useState([]);
//   const [finalData, setFinalData] = useState([]);

//   return (
//     <div>
//       <multiStepContext.Provider
//         value={{
//           currentStep,
//           setCurrentStep,
//           userData,
//           setUserData,
//           finalData,
//           setFinalData,
//         }}
//       >
//         <MedicalRecords />
//       </multiStepContext.Provider>
//     </div>
//   );
// };

// export default MedicalRecordStepContext;
