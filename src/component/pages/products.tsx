import React, { Component } from 'react';
import Sidebar from './sidebar';
import './products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
class Products extends Component {
    render() {
        return (
            <>
                <main>
                    <Sidebar />



                    <div className="productscontent">
                        <div className="wrapper">
                            <div className='routemodule'>
                                <div>
                                    <section style={{ width: "100%" }}>
                                        <div className="row-fluid">
                                            <div className="span12">
                                                <ul className="breadcrumbone">
                                                    <li style={{ textAlign: "left" }}><a href="/inventory/">Product</a><span className="divider">/</span><span className="active">Product Catalog</span></li>
                                                </ul>
                                            </div>
                                        </div>  </section>
                                </div>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-3">
                                <div className="input-append new-input-append">
                                    <input
                                        type="text"
                                        className="keywordsearch"
                                        placeholder="Keyword Search"
                                        name="filter[keyword]"
                                        value=""
                                    // fdprocessedid="iox0y"
                                    />
                                    {/* <FontAwesomeIcon icon={faSearch} /> */}
                                </div>
                            </div>
                            <div className="col-md-6">

                                <ul className="batchactions" style={{ display: "flex" }}>
                                    <li className="btngrounp" data-testid="add-products-dropdown">
                                        <div className="btn-group">
                                            <button className="buttonone  btn-small   dropdown-toggle" data-toggle="dropdown" type="button" style={{ display: "flex" }}>
                                                <div className="se-button__content-wrapper">
                                                    <span className="se-button__content">
                                                        <i className="fa fa-plus  faplusicon">
                                                        </i>Add Products<span>&nbsp;<span className="caret"></span>
                                                        </span>
                                                    </span></div>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="se-link" data-testid="import-products-button" href="#">Import from Stores</a>
                                                </li>
                                                <li><a rel="nofollow" href="/products/uploads">Upload from .CSV</a></li><li>
                                                    <a href="/inventory/products/new">Add Product</a></li></ul></div></li>
                                    <li className="btngrounp" data-testid="add-products-dropdown">
                                        <div className="btn-group">
                                            <button className="buttonone  btn-small   dropdown-toggle" data-toggle="dropdown" type="button" style={{ display: "flex" }}>
                                                <div className="se-button__content-wrapper">
                                                    <span className="secondbtn">
                                                        Export Products<span>&nbsp;<span className="caret"></span>
                                                        </span>
                                                    </span></div>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="se-link" data-testid="import-products-button" href="#">Import from Stores</a>
                                                </li>
                                                <li><a rel="nofollow" href="/products/uploads">Upload from .CSV</a></li><li>
                                                    <a href="/inventory/products/new">Actions</a></li></ul></div></li>
                                    <li className="btngrounp" data-testid="add-products-dropdown">
                                        <div className="btn-group">
                                            <button className="buttonone  btn-small   dropdown-toggle" data-toggle="dropdown" type="button" style={{ display: "flex" }}>
                                                <div className="se-button__content-wrapper">
                                                    <span className='thirdbtn'>

                                                        Actions<span>&nbsp;<span className="caret"></span>
                                                        </span>
                                                    </span></div>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="se-link" data-testid="import-products-button" href="#">Import from Stores</a>
                                                </li>
                                                <li><a rel="nofollow" href="/products/uploads">Upload from .CSV</a></li><li>
                                                    <a href="/inventory/products/new">Add Product</a></li></ul></div></li></ul>
                            </div>
                            <div className="col-md-3"></div>
                        </div>



<div className='row'>
<div className='col-md-2'>
<a className="reset-filters">Reset Filters</a>

<div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Product Type</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="All" control={<Radio />} label="All" />
        <FormControlLabel value="Product" control={<Radio />} label="Product" />
        <FormControlLabel value="Bundle" control={<Radio />} label="Bundle" />
        <FormControlLabel value="Varient" control={<Radio />} label="Varient Group" />
      </RadioGroup>
    </FormControl>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Weight</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="All" control={<Radio />} label="All" />
        <FormControlLabel value="<13" control={<Radio />} label="< 13 oz" />
        <FormControlLabel value="Bundle" control={<Radio />} label="13 oz 3lb" />
        <FormControlLabel value="Varient" control={<Radio />} label="< 3 lb" />
      </RadioGroup>
    </FormControl>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Active</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Active" control={<Radio />} label="Active" />
        <FormControlLabel value="Inactive" control={<Radio />} label="Inactive" />
     
      </RadioGroup>
    </FormControl>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Tags</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <input
                                        type="text"
                                        className="keywordsearchone"
                                        placeholder="Enter Tags"
                                        name="filter[keyword]"
                                        value=""
                                    // fdprocessedid="iox0y"
                                    />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Category</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group">
        <label htmlFor="product_category_id_0" className="categorylabel"><input name="filter[product_category_id][]" id="product_category_id_0" type="checkbox" value="0" />Uncategorized</label>
     
      </RadioGroup>
    </FormControl>
          </AccordionDetails>
        </Accordion>

        {/* <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Disabled Accordion</Typography>
          </AccordionSummary>
        </Accordion> */}
      </div>

</div>

<div className='col-md-8  secondcolumn'  >
<ul className="quick-links">
      <li>
        <a id="arrange-columns-btn" href="#arrange-columns-modal">
          <i className="fa fa-columns"></i>Arrange Columns
        </a>
      </li>
    </ul>

    <table className='firsttable'>
    <thead className='firsthead'>
        <tr>
            <th className='firstth'>
                <input type="checkbox" />
                </th>
                <th>Image</th>
                <th className="">
                    <a href="#" className="firstheader">SKU</a>
                    </th>
                    <th className="">
                        <a href="#" className="firstheader">Name</a>
                        </th>
                        <th className="">
                            <a href="#" className="firstheader">Category</a>
                            </th>
                            <th className="">
                                <a href="#" className="firstheader">Weight</a>
                                </th>
                                <th className="">
                                    <a href="#" className="firstheader">Warehouse Bin</a>
                                    </th>
                                    </tr>
                                    </thead>
                                    <tbody><tr className=""><td><input type="checkbox" name="checked_products[]" value="43295551" style={{display: "inline-block", verticalAlign: "baseline"}} /></td><td></td><td><a href="/inventory/products/43295551">482-9008X</a></td><td><a href="/inventory/products/43295551">Alpinestars Supertech S-M10 Solid Helmet[8300419-1441-X,X-Large,Anthracite/Grey/Orange]</a></td><td></td><td>10 lb</td><td></td></tr></tbody>
    </table>
</div>

</div>

                    </div>

                </main>
            </>
        )
    }
}
export default Products;