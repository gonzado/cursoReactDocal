import React from "react";

const Banner = () => {
    return (
        <div id="carouselExampleIndicators" class="carousel slide mb-5" data-bs-ride="true">
            <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../img/banner_principal(1600x622px)hamb_pull-pork.jpg" alt="Banner" srcset="" />
            </div>
            <div class="carousel-item">
            <img src="../img/HN.banner(1600x622px)_MHW.jpg" alt="Banner" srcset="" />
            </div>
            <div class="carousel-item">
            <img src="../img/banner_principal(1600x622px)hamb_smash.jpg" alt="Banner" srcset="" />
            </div>
        </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Banner;