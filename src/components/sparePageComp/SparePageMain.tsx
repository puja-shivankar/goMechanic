import React from "react";
import { Footer } from "../reusable/footer/Footer";
import { AskQustion } from "./askQuestion/AskQuestion";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import {
  PaginationSlider,
  PaginationSliderSmall,
  SpareParts,
} from "./minorComponents";
import { OemBrand } from "./OemBrand/OemBrand";
import { OesBrands } from "./oesBrands/OesBrands";
import { SpareOffer } from "./offer/SpareOffer";
import OurBlog from "./OurBlogs/OurBlog";
import { SpareBenifit } from "./spareBenefit/SpareBenifit";
import SpareFooter from "./spareFooter/SpareFooter";
import SpareFooterEnd from "./spareFooter/SpareFooterEnd";
// import { SpareFooter } from "./spareFooter/SpareFooter";
import NavBar from "./SpareHeader";
import { SpareRating } from "./spareRating/SpareRating";
import SpareForm from "./sparesForm/SpareForm";
import "./style/style.css";
import TopDeals from "./TopDeals/TopDeals";

const SparePageMain = () => {
  return (
    <div className="mainApp flex my-container">
      <NavBar />
     
      <PaginationSlider />
      <SpareForm />
      <PaginationSliderSmall />
      <SpareParts />
      <FeaturedCategories />
      <OemBrand />
      <TopDeals />
      <OesBrands />
      <SpareOffer />
      <OurBlog />
      <SpareRating />
      <SpareBenifit />
      <AskQustion />
      <SpareFooter />
      <SpareFooterEnd />
    </div>
  );
};

export default SparePageMain;
