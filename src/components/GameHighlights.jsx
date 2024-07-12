import React from "react";
import Card from "./Card";
import {highlights} from '../data/highlightsData'
const GameHighlights = () => {





  return (
  <section className="flex flex-col md:flex-row items-center  justify-center py-16 mb-10">
        {highlights.map((highlights) => <Card key={highlights.alt} {...highlights} />)}
  </section>)
};

export default GameHighlights;
