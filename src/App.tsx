import './App.css'

export default () => {

  const imageUrl='https://www.google.com.br/logos/google.jpg';
  
  return (                                                                                                                                                                                                                                                                                    
    <div className="google"> 
        <div className="a">
            <img src={imageUrl} alt="" className="google-img"/> 
            <div className="google-item">
             Pesquisar...
            </div>
            <div className="botton">
            Pesquisa Google
            </div>
            
        </div>
           
    </div>
  )
}