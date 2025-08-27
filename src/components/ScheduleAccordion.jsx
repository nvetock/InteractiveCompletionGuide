export default function ScheduleAccordion({ days = [], hoursPerDay = 1, id = "schedule" }) {
  if (!days.length) return null;

  return (
    <div className="accordion mt-3" id={id}>
      {days.map((day, idx) => (
        <div className="accordion-item" key={day}>
          <h2 className="accordion-header" id={`${id}-heading-${idx}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${id}-collapse-${idx}`}
              aria-expanded="false"
              aria-controls={`${id}-collapse-${idx}`}
            >
              {day.toUpperCase()} — {hoursPerDay} hour{hoursPerDay > 1 ? "s" : ""}
            </button>
          </h2>
          <div
            id={`${id}-collapse-${idx}`}
            className="accordion-collapse collapse"
            data-bs-parent={`#${id}`}
          >
            <div className="accordion-body">
              {/* Replace this with generated tasks/blocks per day */}
              Study focus for {day}.
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
