import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function QuizCategoryType(props: any) {
  const navigate = useNavigate();

  function navigator() {
    navigate("QuizCategory");
  }

  return (
    <>
      <div className="m-2 d-flex justify-content-center align-items-center row" style={{height:  '100vh'}}>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Technical Quiz</h3>
              
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="card-link border shadow p-2 rounded text-bg-primary">
                Procced
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card" >
            <div className="card-body">
              <h3 className="card-title">Non-Technical Quiz</h3>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="card-link border shadow p-2  rounded text-bg-primary">
              Procced
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
