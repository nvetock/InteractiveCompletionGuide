import { useMemo, useState } from "react";
import WeekdaySelector from "./WeekdaySelector";
import ScheduleAccordion from "./ScheduleAccordion";

export default function Form() {
  const [hours, setHours] = useState(1);
  const [days, setDays] = useState([]);

  // Live comparison of 3 vs 4 days/week using the current hours/day
  const comparison = useMemo(() => {
    const h = Number(hours) || 0;
    return {
      threeDays: { days: 3, weeklyHours: h * 3 },
      fourDays:  { days: 4, weeklyHours: h * 4 },
      current:   { days: days.length, weeklyHours: h * days.length }
    };
  }, [hours, days]);

  return (
    <form className="mb-4">
      <div className="row g-3 align-items-end">
        <div className="col-12 col-sm-4">
          <label htmlFor="hours" className="form-label">Hours per day</label>
          <input
            id="hours"
            type="number"
            min="1"
            className="form-control"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
        </div>

        <div className="col-12 col-sm-8">
          <label className="form-label">Select weekdays</label>
          <WeekdaySelector value={days} onChange={setDays} />
          <div className="form-text mt-2">
            Selected: {days.length ? days.join(", ") : "None"}
          </div>
        </div>
      </div>

      {/* Live comparison cards */}
      <div className="row g-3 mt-3">
        <div className="col-12 col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="card-title mb-2">3 days / week</h6>
              <div className="display-6">{comparison.threeDays.weeklyHours}</div>
              <div className="text-muted">weekly hours</div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="card-title mb-2">4 days / week</h6>
              <div className="display-6">{comparison.fourDays.weeklyHours}</div>
              <div className="text-muted">weekly hours</div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className={`card h-100 ${days.length ? "border-primary" : ""}`}>
            <div className="card-body">
              <h6 className="card-title mb-2">Current selection</h6>
              <div className="display-6">{comparison.current.weeklyHours}</div>
              <div className="text-muted">
                {comparison.current.days} day(s) / week
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live accordion preview for currently selected days */}
      <ScheduleAccordion days={days} hoursPerDay={Number(hours) || 0} id="liveSchedule" />
    </form>
  );
}
