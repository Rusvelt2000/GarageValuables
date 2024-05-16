function ValuableForm() {
  return (
    <div>
      <h2>Add Vaulable</h2>
      <form style={{ display: "flex", gap: "16px" }}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" />
        </div>
        <div>
          <label htmlFor="cost">Cost</label>
          <input id="cost" type="text" name="cost" />
        </div>
      </form>
    </div>
  );
}

export default ValuableForm;
