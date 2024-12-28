import { CURRENTLINE, PINK, ORANGE } from "../../helpers/colors";
import Contact from "./Contact";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";

function Contacts({ contacts, loading , confirmDelete}) {
  return (
    <>
      <section className="container">
        <div className="grid">
          <div className="row pt-3">
            <div className="col">
              <p className="h3 float-end">
                <Link to={"/contacts/add"} className="btn mx-2" style={{ backgroundColor: PINK }}>
                  ساخت مخاطب جدید
                  <i className="fa fa-plus-circle mx-2" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <Spinner/>
      ) : (
        <section className="container">
          <div className="row">
            {contacts.length > 0 ? (
              contacts.map((c) => <Contact confirmDelete = {()=>confirmDelete(c.id , c.fullname)} key={c.id} contact={c} />)
            ) : (
              <div
                className="text-center py-5 "
                style={{ backgroundColor: CURRENTLINE }}
              >
                <p className="h3" style={{ color: ORANGE }}>
                  مخاطب پیدا نشد
                </p>
                <img
                  src={require("../../assets/no-found.gif")}
                  alt="پیدا نشد"
                  className="w-25"
                />
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}

export default Contacts;
