import { useEffect, useState, useRef } from "react";


const initialData = [
  { id: 1, status: "Applied to", role: "Front End Developer", date: "Sep 20" },
  { id: 2, status: "Advanced to phone screening by", name: "Bethany Blake", date: "Sep 22" },
  { id: 3, status: "Completed phone screening with", name: "Martha Gardner", date: "Sep 28" },
  { id: 4, status: "Advanced to interview by", name: "Bethany Blake", date: "Sep 30" },
  { id: 5, status: "Completed interview with", name: "Katherine Snyder", date: "Oct 4" },
];

export default function Timeline() {
  const [data, setData] = useState(initialData);
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
          setLoading(true);
          setTimeout(() => {
            setData((prevData) => [
              ...prevData,
              { id: prevData.length + 1, status: "New Event", name: "New Person", date: "TBD" },
            ]);
            setLoading(false);
          }, 1000);
        }
      }
    };

    const refCurrent = containerRef.current;
    if (refCurrent) refCurrent.addEventListener("scroll", handleScroll);
    return () => refCurrent && refCurrent.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div ref={containerRef} className="container p-3 border rounded shadow-lg overflow-auto" style={{ maxWidth: "500px", height: "400px" }}>
      <h4 className="text-primary mb-3">Application Timeline</h4>
      {data.map((item) => (
        <div key={item.id} className="d-flex align-items-center gap-3 p-2 border-bottom" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="text-primary">{item.icon}</div>
          <div>
            <p className="fw-semibold mb-0">
              {item.status} {item.name || item.role}
            </p>
            <p className="text-muted small">{item.date}</p>
          </div>
        </div>
      ))}
      {loading && (
        <div className="text-center mt-2">
          <p className="text-muted small">Loading more...</p>
        </div>
      )}
    </div>
  );
}