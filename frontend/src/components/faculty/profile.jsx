function Profile(){
    return(
        <div className="profLayout">
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
        </div>
    )
}
