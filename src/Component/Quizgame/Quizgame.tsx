
import { categories } from "./Data/QuizCategory";

import category from "../../Model/Category";
import { Link } from "react-router-dom";


export default function Quizgame(props: any) {


  function handleQuiz(params: string) {
 
    props.setNameQuiz(params);
    localStorage.setItem('Category', params);
  }
  console.log(props.search)

  return (
    <>
      <div className="h1">{props.QuizCategoryList}</div>

      <div className="d-flex w-50 m-3">
        <input type="search" className="form-control" placeholder="Search" aria-label="Search" value={props.search} onChange={(e) => props.setSearch(e.target.value)} />
        
    </div>

      <div className="d-flex row mx-0">
        
        {categories.map((category: category, index: number) => {
          if(props.search.length === 0){
            return (
              <div className="col-sm-4" key={index}>
                <div className="card cardeffect   shadow-lg"  style={{display: 'flex', justifyContent: 'center'}}>
                  <div className="" >
                    <img
                      className="card-img-top"
                      src={category.image}
                      alt="Card image cap"
                      style={{ maxHeight: "13rem" }}
                      
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title ">
                      <span>{category.Id}. </span>
                      {category.name}
                    </h5>
                    <p className="card-text text-start">{category.description}</p>
                    
  
                    <Link
                      to="/Quizgames/Quiz"
                      className="btn btn-primary w-50"
                      onClick={() => handleQuiz(category.name)}
                    >
                     
                      Start Quiz
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
         else if(category.name.toLowerCase().includes(props.search.toLowerCase()) ){
          return (
            <div className="col-sm-4" key={index}>
              <div className="card cardeffect  shadow-lg" style={{display: 'flex', justifyContent: 'center'}}>
                <div className="" >
                  <img
                    className="card-img-top"
                    src={category.image}
                    alt="Card image cap"
                    style={{ maxHeight: "13rem" }}
                    
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title ">
                    <span>{category.Id}. </span>
                    {category.name}
                  </h5>
                  <p className="card-text text-start">{category.description}</p>
                  

                  <Link
                    to="/Quizgames/Quiz"
                    className="btn btn-primary w-50"
                    onClick={() => handleQuiz(category.name)}
                  >
                   
                    Start Quiz
                  </Link>
                </div>
              </div>
            </div>
          );
         }
      
        })}
      </div>
    </>
  );
}
