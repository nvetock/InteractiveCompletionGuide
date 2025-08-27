import { useState } from "react";

const DAYS = [
  { key: "mon", label: "Monday", short: "M" },
  { key: "tue", label: "Tuesday", short: "T" },
  { key: "wed", label: "Wednesday", short: "W" },
  { key: "thu", label: "Thursday", short: "Th" },
  { key: "fri", label: "Friday", short: "F" },
  { key: "sat", label: "Saturday", short: "S" },
  { key: "sun", label: "Sunday", short: "Su" },
];

export default function WeekdaySelector({ value = [], onChange }) {
  const [selected, setSelected] = useState(new Set(value));

  const toggle = (key) => {
    const next = new Set(selected);
    next.has(key) ? next.delete(key) : next.add(key);
    setSelected(next);
    onChange?.(Array.from(next));
  };

  return (
    <div className="d-flex flex-wrap gap-2">
      {DAYS.map(({ key, label, short }) => {
        const id = `day-${key}`;
        const checked = selected.has(key);
        return (
          <div key={key} className="weekday-square">
            <input
              className="btn-check"
              id={id}
              type="checkbox"
              autoComplete="off"
              checked={checked}
              onChange={() => toggle(key)}
              aria-label={label}
            />
            <label
              className="btn btn-outline-primary fw-semibold"
              htmlFor={id}
              title={label}
            >
              {short}
            </label>
          </div>
        );
      })}
    </div>
  );
}
