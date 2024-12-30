import { CURRENTLINE, PINK, ORANGE } from "../../helpers/colors";
import Contact from "./Contact";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContactContext } from "../../context/contactContext";

const Contacts = () => {
 const {filteredContacts, loading , deleteContact} = useContext(ContactContext);
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
            {filteredContacts.length > 0 ? (
              filteredContacts.map((c) => <Contact deleteContact = {()=>deleteContact(c.id , c.fullname)} key={c.id} contact={c} />)
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
