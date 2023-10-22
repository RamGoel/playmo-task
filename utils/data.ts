function calculateAge(dob: any) {
    const splittedDate = dob.split("/");
  const dobDate = new Date(`${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`);

  const currentDate = new Date();

  let age = currentDate.getFullYear() - dobDate.getFullYear();

  if (
    currentDate.getMonth() < dobDate.getMonth() ||
    (currentDate.getMonth() === dobDate.getMonth() && currentDate.getDate() < dobDate.getDate())
  ) {
    age--;
  }

  return age;
}

export const questionsData = [
    {
        question: "What's the date of birth of your child?",
        inputType: "date",
        dataKey:"dob",
        placeholder: "DD/MM/YYYY",
        questionType: "input",
        nextQuestionIndex: (dob:any) => {
            console.log(calculateAge(dob));
            if (calculateAge(dob) <= 3) {
                return 1;
            }else {
                return 4;
            }
        },
        prevQuestionIndex:()=>-1
    },
    {
        question: "Which programs is your child enrolled in?",
        inputType: "single",
        dataKey:"program",
        placeholder: "",
        choices: ["Preschool","School", "Parent - toddler programs","Other classes - sports, cultural, etc."],
        questionType: "choice",
        nextQuestionIndex: (selectedChoice:string) => {
            if (selectedChoice ===  "Parent - toddler programs") {
                return 2;
            }
        },
        prevQuestionIndex:()=>0
    },
    {
        question: "What do you like best about the parent-toddler program?",
        inputType: "single",
        dataKey:"like",
        placeholder: "",
        choices: [
            "Age-appropriate structured activities",
            "Social interaction for children",
            "Meeting parents with similar-aged kids",
            "Play in a safe environment",
            "Expert facilitators ask questions about the child’s growth",
            "Preparation for preschool - getting comfortable with the space"
        ],
        questionType: "multi-choice",
        nextQuestionIndex: () => {
            return 3;
        },
        prevQuestionIndex:()=>1
    },
     {
        question: "What do you not like about the parent-toddler program?",
         inputType: "single",
        dataKey:"dislike",
        placeholder: "",
        choices: [
            "Not designed for both parents",
            "Very expensive",
            "Not flexible with parents’ schedules",
            "Activities not necessarily age-appropriate",
        ],
        questionType: "multi-choice",
         nextQuestionIndex: () => {
             return -1;
         },
         prevQuestionIndex:()=>2
    },
     {
        question: "Which programs is your child enrolled in?",
         inputType: "single",
        dataKey:"programMoreThan3",
        placeholder: "",
        choices: [
            "Preschool",
            "School",
            "Other classes - sports, cultural, etc.",
        ],
        questionType: "choice",
        nextQuestionIndex: () => {
            return 5;
         },
        prevQuestionIndex:()=>0
    },
     {
        question: "How often does your child play with other similar-age kids, apart from school/classes?",
        inputType: "single",
        dataKey:"play",
        placeholder: "",
        choices: [
            "Almost daily",
            "A few times a week",
            "Once a week",
            "A few times a month",
            "Once a month",
            "Rarely"
        ],
        questionType: "choice",
        nextQuestionIndex: () => {
            return -1;
        },
        prevQuestionIndex:()=>4
    },
]