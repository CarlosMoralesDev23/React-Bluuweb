import { Fragment } from "react";


const App = () =>{

  const title = `Mi titulo desde una constante`
  const classTitle = 'text-center'
  const pathImg = "https://picsum.photos/seed/picsum/200/300"

  return (
      <Fragment>
          <h1 className={classTitle}>{title}</h1>
          <img src= {pathImg} alt="montaña nevada" />
      </Fragment>
  );

}

export default App