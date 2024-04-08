import "./styles/profile.css"

function Profile() {
  return (
    <div className="profLayout">
      <section className="upper">
        <div className="left-panel">
          <img src="" alt="" />
        </div>
        <div className="right-panel">
          <div className="input-set">
            <label htmlFor="fname"></label>
            <input type="text" name="fname" id="fname" />
          </div>
          <div className="input-set">
            <label htmlFor="fid"></label>
            <input type="text" name="fid" id="fid" />
          </div>
          <div className="input-set">
            <label htmlFor="rareas"></label>
            <input type="text" name="rareas" id="rareas" />
          </div>
        </div>
      </section>
      <div>
        <label htmlFor="past-project">Past Projects</label>
        <textarea
          name="past-projects"
          id="past-projects"
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </div>
  );
}
