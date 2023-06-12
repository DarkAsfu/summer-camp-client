import { useState } from "react";
import Swal from "sweetalert2";
import useCourse from "../../../hooks/useCourse";

const ManageClasses = () => {
  const [classes, loading, refetch] = useCourse();
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const handleApprove = (item) => {
    fetch(`http://localhost:5000/courses/approveStatus/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Approve done",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDenied = (item) => {
    fetch(`http://localhost:5000/courses/deniedStatus/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Denied done",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const openFeedbackModal = (item) => {
    setSelectedClass(item);
    setFeedbackModalOpen(true);
  };

  const closeFeedbackModal = () => {
    setSelectedClass(null);
    setFeedbackModalOpen(false);
  };

  const handleFeedbackSubmit = (event, item) => {
    event.preventDefault();
    const feedback = event.target.feedback.value;
    const instructorId = item._id; // Use item._id to get the instructor ID
    console.log(instructorId);
    fetch(`http://localhost:5000/instructor/feedback/${instructorId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ feedback }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        closeFeedbackModal();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Feedback sent successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error scenarios if necessary
      });
  };

  return (
    <div>
      <h2>Manage Classes from admin {classes.length}</h2>
      <div className="overflow-x-auto w-full mt-10 md:mt-0">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Course Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
            {classes.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.class_image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </td>
                <td>{item.class_name}</td>
                <td className="text-start">{item.instructor_name}</td>
                <td className="badge h-full my-auto mt-12">{item.instructorEmail}</td>
                <td className="text-center">{item.price}</td>
                <td className="text-center">{item.status}</td>
                <td className="space-y-2 md:space-y-0 gap-2 flex items-center">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleApprove(item)}
                      className="btn btn-sm"
                      disabled={item.status === "approve" || item.status === "denied"}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleDenied(item)}
                      className="btn btn-sm"
                      disabled={item.status === "approve" || item.status === "denied"}
                    >
                      Deny
                    </button>
                  </div>
                  <button onClick={() => openFeedbackModal(item)} className="btn btn-sm">
                    Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {feedbackModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-80 border">
            <h2 className="text-xl font-bold mb-4">Send Feedback</h2>
            <form onSubmit={(event) => handleFeedbackSubmit(event, selectedClass)}>
              <textarea name="feedback" className="w-full h-32 mb-4 p-4" placeholder="Enter your feedback" />
              <div className="flex justify-end">
                <button type="button" className="btn btn-sm mr-2" onClick={closeFeedbackModal}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-sm btn-primary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;
