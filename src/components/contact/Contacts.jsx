import { PINK } from "../../helpers/colors";

function Contacts() {
  return (
    <>
      <section className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3">
                <button className="btn mx-2" style={{ backgroundColor: PINK }}>
                  ساخت مخاطب جدید
                  <i className="fa fa-plus-circle mx-2" />
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
      <div className="row">
      </div>
      </section>
    </>
  );
}

export default Contacts;
