import { useNavigate } from "react-router-dom";

function Category() {
  const navigate = useNavigate();

  const categories = [
    "history",
    "geography",
    "science",
    "sports",
    "technology"
  ];

  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">
        Select Category
      </h2>

      <div className="row">

        {categories.map((cat) => (
          <div
            key={cat}
            className="col-md-4 mb-4"
          >
            <div
              className="card category-card shadow"
              onClick={() =>
                navigate(`/quiz/${cat}`)
              }
            >
              <div className="card-body text-center">
                <h3>
                  {cat.toUpperCase()}
                </h3>
              </div>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Category;