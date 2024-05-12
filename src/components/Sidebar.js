import React from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
const Sidebar = () => {
  return (
    <div className="sidecontainer">
      <div>
        <div>
          <MdOutlineCheckBoxOutlineBlank /> CUSTOMISE
        </div>
      </div>
      <div>
        <hr />
      </div>


      <div className="deal">
        <div className="">
          <h5>DEAL FOR</h5>
          <p>All</p>
        </div>
          <IoMdArrowDropdown />
      </div>
      <div>
        <hr />
      </div>

      <div className="deal">
        <div className="">
          <h5>OCCASION</h5>
          <p>All</p>
        </div>
          <IoMdArrowDropdown />
      </div>
      <div>
        <hr />
      </div>

      
      <div className="deal">
        <div className="">
          <h5>WORK</h5>
          <p>All</p>
        </div>
          <IoMdArrowDropdown />
      </div>
      <div>
        <hr />
      </div>

      
      <div className="deal">
        <div className="">
          <h5>FABRIC</h5>
          <p>All</p>
        </div>
          <IoMdArrowDropdown />
      </div>
      <div>
        <hr />
      </div>

      <div className="deal">
        <div className="">
          <h5>SEGMENT</h5>
          <p>All</p>
        </div>
          <IoMdArrowDropdown />
      </div>
      <div>
        <hr />
      </div>

      <div className="deal">
        <div className="">
          <h5>SUITABLE FOR</h5>
          <p>All</p>
        </div>
          <IoMdArrowDropdown />
      </div>
      <div>
        <hr />
      </div>

      <div className="deal">
        <div className="">
          <h5>RAW MATERIAL</h5>
          <p>All</p>
        </div>
          <IoMdArrowDropdown />
      </div>
      <div>
        <hr />
      </div>

      <div className="deal">
        <div className="">
          <h5>PATTERN</h5>
          <p>All</p>
        </div>
          <IoMdArrowDropdown />
      </div>
      <div>
        <hr />
      </div>


   
    </div>
  );
};

export default Sidebar;
