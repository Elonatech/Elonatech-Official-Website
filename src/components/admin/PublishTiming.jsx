// "When" control shared by the product editors: Upload now / Schedule for later.
// (The blog editors keep their own copy of this markup; this one is for products.)

// An ISO/UTC timestamp -> the "YYYY-MM-DDTHH:mm" local-time string that
// <input type="datetime-local"> wants (it has no timezone or seconds).
export const toLocalInputValue = (iso) => {
  const local = new Date(iso);
  local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
  return local.toISOString().slice(0, 16);
};

// The earliest value the picker should allow: right now, in local time.
const minLocalInput = () => toLocalInputValue(new Date());

// Returns an error message when "schedule" is chosen but the time is missing
// or not in the future, otherwise null.
export const scheduleError = (mode, value) => {
  if (mode !== "schedule") return null;
  if (!value) return "Pick a date and time to schedule for";
  if (new Date(value) <= new Date()) return "Scheduled time must be in the future";
  return null;
};

// datetime-local carries no timezone, so resolve it against the browser's own
// zone and send an unambiguous UTC string — the server's timezone can then
// never cause a mismatch.
export const toUtcIso = (value) => new Date(value).toISOString();

const PublishTiming = ({ mode, onModeChange, value, onChange }) => (
  <div className="mb-3 mt-3">
    <label className="form-label fw-bold d-block">When</label>
    <div className="btn-group" role="group" aria-label="Publish timing">
      <button
        type="button"
        className={`btn btn-sm ${mode === "now" ? "btn-primary" : "btn-outline-primary"}`}
        onClick={() => onModeChange("now")}
      >
        Upload now
      </button>
      <button
        type="button"
        className={`btn btn-sm ${mode === "schedule" ? "btn-primary" : "btn-outline-primary"}`}
        onClick={() => onModeChange("schedule")}
      >
        Schedule for later
      </button>
    </div>

    {mode === "schedule" && (
      <input
        type="datetime-local"
        className="form-control mt-2"
        value={value}
        min={minLocalInput()}
        onChange={(e) => onChange(e.target.value)}
      />
    )}
  </div>
);

export default PublishTiming;
