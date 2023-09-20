import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import useBaseURL from "../../Hooks/useBaseURL";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ViewResult = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [studentInfo, setStudentInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [url] = useBaseURL();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${url}/getAllResults`);
        const data = await res.json();
        console.log("Data received from the API:", data); // Add this line
        setStudentsData(data);
        reset();
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  useEffect(() => {
    generatePDF();
  }, []); // Empty dependency array means it runs once after initial render

  console.log(studentsData);

  const onSubmit = (data) => {
    const { classInput, rollInput, passingYearInput } = data;
    const foundStudent = studentsData.find(
      (student) => student.class === +classInput && student.roll === +rollInput && student.passingYear === +passingYearInput
    );

    if (foundStudent) {
      setStudentInfo(foundStudent);
    } else {
      setStudentInfo(null);
    }
  };

  // Function to calculate letterGrade and gradePoint
  function calculateGradeAndPoint(subject, marks, maxMarks) {
    let letterGrade;
    let gradePoint;

    // Get the maximum marks for the subject
    const maxMark = maxMarks[subject];

    // Calculate the percentage for the subject
    const percentage = (marks / maxMark) * 100;

    if (percentage >= 80) {
      letterGrade = "A+";
      gradePoint = 5.0;
    } else if (percentage >= 70) {
      letterGrade = "A";
      gradePoint = 4.0;
    } else if (percentage >= 60) {
      letterGrade = "A-";
      gradePoint = 3.5;
    } else if (percentage >= 50) {
      letterGrade = "B";
      gradePoint = 3.0;
    } else if (percentage >= 40) {
      letterGrade = "C";
      gradePoint = 2.0;
    } else if (percentage >= 33) {
      letterGrade = "D";
      gradePoint = 1.0;
    } else {
      letterGrade = "F";
      gradePoint = 0.0;
    }

    return { letterGrade, gradePoint };
  }

  const maxMarks = {
    "Bangla 1st": 100,
    "Bangla 2nd": 50,
    "English 1st": 100,
    "English 2nd": 50,
    "Higher Mathematics": 100,
    Mathematics: 100,
    Physics: 100,
    Chemistry: 100,
    Biology: 100,
    ICT: 50,
  };

  const generatePDF = () => {
    const targetElement = document.getElementById("marksheet"); // Replace "marksheet" with the ID of your Marksheet Div

    if (!targetElement) {
      console.error("Target element not found");
      return;
    }

    const pdfOptions = {
      filename: "marksheet.pdf",
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
    };

    html2canvas(targetElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg");
      const pdf = new jsPDF(pdfOptions.jsPDF);
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;

      pdf.addImage(imgData, "JPEG", 0, 0, width, height);
      pdf.save(pdfOptions.filename);
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="w-full max-w-md mx-auto rounded shadow-md p-8">
        <div>
          <div className="w-full mx-auto py-3 mb-10 bg-green-500">
            <h1 className="text-lg lg:text-2xl text-center text-white">শিক্ষার্থীর ফলাফল খোঁজুন</h1>
          </div>
          <h1 className="text-3xl font-bold mb-8"></h1>

          {isLoading ? (
            <>
              <div className="text-center my-4">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            </>
          ) : (
            <>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <div className="">
                    <label className="text-lg">ক্লাস: </label>
                    <Controller
                      name="classInput"
                      control={control}
                      defaultValue=""
                      rules={{ required: "ক্লাস আবশ্যক" }}
                      render={({ field }) => <input type="text" className="border w-full p-2 rounded-lg" {...field} />}
                    />
                  </div>
                  {errors.classInput && <p className="text-red-600">{errors.classInput.message}</p>}
                  <div className="">
                    <label className="text-lg">রোল: </label>
                    <Controller
                      name="rollInput"
                      control={control}
                      defaultValue=""
                      rules={{ required: "রোল আবশ্যক" }}
                      render={({ field }) => <input type="text" className="border w-full p-2 rounded-lg" {...field} />}
                    />
                  </div>
                  {errors.rollInput && <p className="text-red-600">{errors.rollInput.message}</p>}
                  <div className="">
                    <label className="text-lg">পাসের সাল: </label>
                    <Controller
                      name="passingYearInput"
                      control={control}
                      defaultValue=""
                      rules={{ required: "পাসের সাল আবশ্যক" }}
                      render={({ field }) => <input type="text" className="border w-full p-2 rounded-lg" {...field} />}
                    />
                  </div>
                  {errors.passingYearInput && <p className="text-red-600">{errors.passingYearInput.message}</p>}
                  <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                    খোঁজ করুন
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>

      {/* Marksheet Div */}
      <div className="my-10 lg:mb-20">
        <div id="marksheet">
          {studentInfo && (
            <div className="p-5 border rounded-lg w-full h-full">
              <div>
                <div>
                  <h1 className="text-3xl font-bold text-center">Al-Azam High School and College, Sylhet</h1>
                  <div className="py-1">
                    <h1 className="text-lg font-semibold text-center">Bangladesh</h1>
                  </div>

                  <div className="py-1">
                    <h1 className="text-xl font-bold text-center">Half-Annual Exam - {new Date().getFullYear()}</h1>
                  </div>

                  <div className="py-1">
                    <h1 className="text-lg font-semibold text-center uppercase text-blue-950">
                      <span className="border-b border-blue-950">Academic Transcript</span>
                    </h1>
                  </div>
                </div>
                <div>
                  <div className="py-1 flex justify-start items-center text-black">
                    <div className="w-4/12 text-base">Name of Student</div>
                    <div className="w-8/12 ml-2 text-base font-semibold italic">
                      <span className="mr-1">:</span>
                      {studentInfo?.studentName}
                    </div>
                  </div>
                  <div className="py-1 flex justify-start items-center text-black">
                    <div className="w-4/12 text-base">Father's Name</div>
                    <div className="w-8/12 ml-2 text-base font-semibold italic">
                      <span className="mr-1">:</span>
                      {studentInfo?.fatherName}
                    </div>
                  </div>
                  <div className="py-1 flex justify-start items-center text-black">
                    <div className="w-4/12 text-base">Mother's Name</div>
                    <div className="w-8/12 ml-2 text-base font-semibold italic">
                      <span className="mr-1">:</span>
                      {studentInfo?.motherName}
                    </div>
                  </div>
                  <div className="py-1 flex justify-start items-center text-black">
                    <div className="w-4/12 text-base">Date of Birth</div>
                    <div className="w-8/12 ml-2 text-base font-semibold italic">
                      <span className="mr-1">:</span>
                      {studentInfo?.birthdayDate}
                    </div>
                  </div>
                  <div className="py-1 flex justify-start items-center text-black">
                    <div className="w-4/12 text-base">Class</div>
                    <div className="w-8/12 ml-2 text-base font-semibold italic">
                      <span className="mr-1">:</span>
                      {studentInfo?.class}
                    </div>
                  </div>
                  <div className="py-1 flex justify-start items-center text-black">
                    <div className="w-4/12 text-base">Roll No.</div>
                    <div className="w-8/12 ml-2 text-base font-semibold italic">
                      <span className="mr-1">:</span>
                      {studentInfo?.roll}
                    </div>
                  </div>
                  <div className="py-1 flex justify-start items-center text-black">
                    <div className="w-4/12 text-base">Passing Year</div>
                    <div className="w-8/12 ml-2 text-base font-semibold italic">
                      <span className="mr-1">:</span>
                      {studentInfo?.passingYear}
                    </div>
                  </div>
                  <div className="py-1 flex justify-start items-center text-black">
                    <div className="w-4/12 text-base">Type of Student</div>
                    <div className="w-8/12 ml-2 text-base font-semibold italic">
                      <span className="mr-1">:</span>
                      Regular
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="overflow-x-auto my-5">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th className="border border-black text-black">Sl. No.</th>
                        <th className="border border-black text-black">Name of Subjects</th>
                        <th className="border border-black text-black">Number</th>
                        <th className="border border-black text-black">Letter Grade</th>
                        <th className="border border-black text-black">Grade Point</th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentInfo?.results?.map((result, index) => {
                        const { subject, marks } = result;
                        const { letterGrade, gradePoint } = calculateGradeAndPoint(subject, marks, maxMarks);

                        return (
                          <tr key={index} className="border border-black">
                            <td className="border border-black text-black">{index + 1}</td>
                            <td className="border border-black text-black">{subject}</td>
                            <td className="border border-black text-black">{marks}</td>
                            <td className="border border-black text-black">{letterGrade}</td>
                            <td className="border border-black text-black">{gradePoint.toFixed(2)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <div className="py-1">
                  <h1>
                    GPA without additional subjects <span className="border-b border-black italic">{`4.80`}</span> and GPA
                    including additional subjects <span className="border-b border-black italic">{`5.00`}</span>.
                  </h1>
                </div>
                <div className="py-1">
                  <h1 className="text-base">
                    Date of Publication of Result:
                    <span className="text-base font-semibold italic ms-1">
                      {new Date().toLocaleDateString(undefined, {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
        <button onClick={generatePDF} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default ViewResult;
