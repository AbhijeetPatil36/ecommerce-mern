import "./Products.css";
import { FaStar } from "react-icons/fa"
import { FaShoppingBag } from "react-icons/fa";

const Products = ({ result }) => {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Shoe"/>
          <div class='card-details'>
            <h3 className="card-title">Nike Air Monarch IV</h3>
            <section className="card-reviews">
            <FaStar className="ratings-start"/>
            <FaStar className="ratings-start"/>
            <FaStar className="ratings-start"/>
            <FaStar className="ratings-start"/>
            <span className="total-reviews">4</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>$300</del>200
              </div>

              <div className="bag">
              <FaShoppingBag className="bagicon"/>
                
              </div>
            </section>

          </div>
        </section>
        <section className="card">
          <img src="https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg" alt="Shoe"/>
          <div class='card-details'>
            <h3 className="card-title">Nike Air Vapormax Plus</h3>
            <section className="card-reviews">
            <FaStar className="ratings-start"/>
            <FaStar className="ratings-start"/>
            <FaStar className="ratings-start"/>
            <FaStar className="ratings-start"/>
            <span className="total-reviews">4</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>$400</del>300
              </div>

              <div className="bag">
              <FaShoppingBag className="bagicon"/>
                
              </div>
            </section>
            
            

          </div>
        </section>
        <section className="card">
          <img src="https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg" alt="Shoe"/>
          <div class='card-details'>
            <h3 className="card-title">Nike Waffle One Sneaker</h3>
            <section className="card-reviews">
            <FaStar className="ratings-start"/>
            <FaStar className="ratings-start"/>
            <FaStar className="ratings-start"/>
            <FaStar className="ratings-start"/>
            <span className="total-reviews">4</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>$300</del>200
              </div>

              <div className="bag">
              <FaShoppingBag className="bagicon"/>
                
              </div>
            </section>
            
            

          </div>
        </section>
        <section className="card">
          <img src="https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg" alt="Shoe"/>
          <div class='card-details'>
            <h3 className="card-title">Shoe</h3>
            <section className="card-reviews">
            <FaStar className="ratings-start"/>
            <FaStar className="ratings-start"/>
            <FaStar className="ratings-start"/>
            <FaStar className="ratings-start"/>
            <span className="total-reviews">4</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>$300</del>200
              </div>

              <div className="bag">
              <FaShoppingBag className="bagicon"/>
                
              </div>
            </section>
            
            

          </div>
        </section>
        
            

        
        
      
      </section>
    </>
  );
};

export default Products;
