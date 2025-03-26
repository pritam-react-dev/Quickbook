import React from "react";
import billimg from "../../../asstes/Images/image 37.png";

const AllDocument = () => {
  const data = [
    { title: "Bill 1", Date: "Jan 1 2025", amount: "$ 50.59", attachment: billimg },
    { title: "Bill 2", Date: "Jan 2 2025", amount: "$ 20", attachment: billimg },
    { title: "Bill 3", Date: "Jan 3 2025", amount: "$ 40.59", attachment: billimg },
    { title: "Bill 4", Date: "Jan 14 2025", amount: "$ 53.20", attachment: billimg },
    { title: "Bill 5", Date: "Jan 15 2025", amount: "$ 58.43", attachment: billimg },
    { title: "Bill 6", Date: "Jan 21 2025", amount: "$ 10.59", attachment: billimg },
    { title: "Bill 7", Date: "Jan 23 2025", amount: "$ 80.9", attachment: billimg },
    { title: "Bill 8", Date: "Jan 28 2025", amount: "$ 1.19", attachment: billimg },
  ];

  return (
    <div className="border rounded p-2" style={{ maxHeight: "450px", overflowY: "auto" }}>
      {data.map((item, index) => (
        <div 
          key={index} 
          className={`d-flex align-items-center gap-2 py-2 ${index !== data.length - 1 ? "border-bottom" : ""}`}
        >
          {/* Image Container */}
          <div className="d-flex justify-content-center align-items-center ms-2" style={{ width: "55px", height: "50px" }}>
            <img src={item.attachment} alt={item.title} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
          </div>

          {/* Text Content */}
          <div className="d-flex flex-column">
            <div className="fw-bold text-primary font-12">{item.title}</div>
            <div className="text-muted font-12">{item.Date}</div>
            <div className="fw-semibold text-dark font-12">{item.amount}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllDocument;
