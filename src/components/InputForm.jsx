export default function InputForm() {
  return (
    <section className="container py-5">
      <form>
        <h3>Set Your Schedule.</h3>
        <label htmlFor="hours_per_day">Hours per day</label>
        <input
          type="number"
          id="hours_per_day"
          placeholder="Hours per day"
        />

        <div>
          <label htmlFor="weekday-mon">Monday</label>"
          <input type="checkbox" id="weekday-mon" name="wwekday-mon" value="1" />
        </div>
      </form>
    </section>
  )
}