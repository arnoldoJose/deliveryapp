import React from 'react'
import '../css/App.css';
// import ImgCarosel from './ImgCarosel';
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StyledH3 from '../Style/H4Styled';
const Menu = ({history}) => {
  

  // useEffect(() => {
 
  //  let consultar =  () => {

  //   fetch("https://api.ipify.org/?format=json")
  //   .then((value) =>  value.json())
  //   .then((val) => console.log(val))
  //  }

  //  consultar();
  // }, [])


  let settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1
  };

    if (window.screen.width === 414) {
      settings.slidesToShow = 1;
    } else {
      settings.slidesToShow = 4;
    }

  // const urlImg = ['https://cdn.pixabay.com/photo/2016/03/09/15/30/breakfast-1246686_1280.jpg',
  //                 'https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg',
  //                 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg',
  //                 'https://cdn.pixabay.com/photo/2018/04/29/11/54/strawberries-3359755_1280.jpg',
  //                 'https://cdn.pixabay.com/photo/2016/07/11/00/18/carrots-1508847_1280.jpg',
  //                 'https://cdn.pixabay.com/photo/2014/08/06/20/32/potatoes-411975_1280.jpg',
  //                 'https://cdn.pixabay.com/photo/2015/03/26/09/39/fried-chicken-690039_1280.jpg',
  //                 'https://cdn.pixabay.com/photo/2019/03/24/14/23/bread-4077812_1280.jpg'];

  let verifiCategorie = async(e) => {

    let categories = e.target.parentElement.parentElement.parentElement.getAttribute("data-categories");

    switch (categories) {
      case "food":
        history.push(`/${categories}`)
        break;
    
      case "various":
        history.push(`/${categories}`)
        break;

      case "market":
        history.push(`/${categories}`)
        break;
      default:
        break;
    }  
    
  }

  return (
    <main>
      <div className="container-img">
        <h1>pedidos rapidos y baratos</h1>
      </div>
     

      <section>
        <div className="container-card">
          <div className="card-title text-center mt-4">
            <h1>Todas Las Categorias</h1>
          </div>
          <div className="col-12 p-5 row mx-auto">
            <div
              className="col-sm-8 col-md-4 col-lg-4 mx-auto cd-img"
              data-categories="food"
            >
              <StyledH3 name="Ordena Tu Comida Favorita"/>
              <div className="card" onClick={verifiCategorie}>
                <picture>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/03/09/15/30/breakfast-1246686_1280.jpg"
                    alt=""
                    className="card-img-top img-cat"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
            <div
              className=" col-sm-8 col-md-4 col-lg-4 mx-auto cd-img img-various"
              data-categories="various"
            >
              <StyledH3 name="Ordena Todo De La Farmacia" />
              <div className="card" onClick={verifiCategorie}>
                <picture>
                  <img
                    src="https://cdn.pixabay.com/photo/2019/03/24/14/23/bread-4077812_1280.jpg"
                    alt=""
                    className="card-img-top img-cat"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
            <div
              className=" col-sm-8 col-md-4 col-lg-4 mx-auto cd-img img-marker"
              data-categories="market"
            >
              <StyledH3 name="Ordena Todo Del Mercado" />
              <div className="card" onClick={verifiCategorie}>
                <picture>
                  <img
                    src="https://cdn.pixabay.com/photo/2014/08/06/20/32/potatoes-411975_1280.jpg"
                    alt=""
                    className="card-img-top img-cat"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Menu

/**
 *  <div className="contenedorSlideMenu">
        <section className="mt-4 mx-auto carSel">
          <div className="col-12 p-5">
            <Slider {...settings}>
              {urlImg.map((item,index) => (
                <ImgCarosel key={`data ${index}`} img={item} />
              ))}
            </Slider>
          </div>
        </section>
      </div>
 */