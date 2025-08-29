const articles = [
  {
    id: 1,
    title: "Viaggio in Silia"
  },
  {
    id: 2,
    title: "Vivere di rendita"
  },
  {
    id: 3,
    title: "C'è vita oltre la terra?"
  },
  {
    id: 4,
    title: "Navigare per mare, la storia della navigazione"
  },
  {
    id: 5,
    title: "L'assicurazione auto più vantaggiosa in Italia"
  },
];

function App() {


  return (

    <div className="container">
      <div className="row">
        {articles.map((article) => {
          return (
            <div className="col-100">
              <div className="article">
                <h3>{article.title}</h3>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
