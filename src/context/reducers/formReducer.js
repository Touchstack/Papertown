
const initialState = {
formData: {
  has_guardian:"",
  email: "",
  password: "",
  confirm_password: "",
  studentDetails: {
    first_name: "",
    last_name: "",
    phone_number: "",
    personal_address: "",
    date_of_birth : "",
    school: "",
    school_address: "",
    grade: ""
    },
  guardianDetails: {
    first_name: "",
    last_name: "",
    phone_number: "",
    personal_address: "",
    relationship: "",
  },
},
};


const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FORM_DATA":
      const { studentDetails, guardianDetails, ...rest } = action.formData;
      return {
        ...state,
        formData: {
          ...state.formData,
          ...rest,
          studentDetails: { ...state.formData.studentDetails, ...studentDetails },
          guardianDetails: { ...state.formData.guardianDetails, ...guardianDetails },
        },
      };
    default:
      return state;
  }
};

export default formReducer;