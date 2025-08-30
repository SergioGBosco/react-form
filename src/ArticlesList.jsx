import { useState } from "react";
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


const ArticlesList = () => {
  const [arts, setArts] = useState(articles)
  const [addArt, setAddArt] = useState("Aggiungi Articolo")




  const handleSubmit = event => {
    event.preventDefault();

    let NewArt = {
      id: arts[arts.length - 1].id + 1,
      title: addArt,
    };
    // kCreata copia dell'arry originale 
    const copyArticles = [...arts, NewArt];
    setArts(copyArticles)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-100">
          <form onSubmit={handleSubmit}>
            <input type="text"
              className="addArticles"
              placeholder="Aggiungi un Articolo..."
              value={addArt}
              onChange={e => { setAddArt(e.target.value) }} />

          </form>
        </div>

        {/* Devo ciclare l'array che corrisponde allo stato attuale */}
        {arts.map((article) => {
          return (
            <div className="col-100" key={article.id}>
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

export default ArticlesList
