import React from "react";
import PageHeader from "../template/pageHeader";


const page = {
    name: 'About',
    description: 'Informations about the task web app for your daily produtivity'
}

export default props => (
  <React.Fragment>
      <PageHeader name={page.name} description={page.description} />
 
  </React.Fragment>
);
