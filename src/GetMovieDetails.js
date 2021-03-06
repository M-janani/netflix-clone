import React from "react";
const GetMovieDetails = ({ moviedata }) => {
  return (
    <>
      <div class="overalldesign">
        <div class="background">
          {" "}
          <body background="https://image.shutterstock.com/image-vector/idea-concept-creative-bulb-sign-260nw-1555544078.jpg"></body>
        </div>
        <div class="frontimage">
          <img
            src={`https://image.tmdb.org/t/p/w500/${moviedata.backdrop_path}`}
            alt=""
          />
        </div>
        <div class="textdetails">
          <div class="inside">
            <div class="title">Title:{moviedata.original_title}</div>
            {/* <div class="stickers"> */}
            {/* <a class="sticker">
              <div class="favourite">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/596/898/small/03112019-19.jpg"></img>
              </div>
              <div class="star">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx4gebpxQd2uPMGH4N3jNRUVcIrlCMnHUNPg&usqp=CAU"></img>
              </div>
            </a> */}
            {/* </div> */}
            <div class="budget">Budget : {moviedata.budget}</div>
            <div class="totaloverview">
              <div class="overview">Overview</div>
              <div class="insideoverview">{moviedata.overview}</div>
            </div>
            <div class="last">
              <div class="popularity">
                <div class="popularityname">Popularity</div>
                <div class="popularitydata">{moviedata.popularity}</div>
              </div>
              <div class="originallanguage">
                <div class="originallanguagename"> Originallanguage</div>
                <div class="originallanguagedata">
                  {" "}
                  {moviedata.original_language}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default GetMovieDetails;
