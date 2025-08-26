import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineMail } from 'react-icons/md';
import logos from "../../assets/logo.webp";

const AcccessoriesFooters = () => {
    return (
        <div className=''>
       <div>
        <footer className="footer my-4 bg-base-200 text-base-content p-0 lg:p-16 grid lg:flex justify-center items-center lg:justify-between">
          <aside>
            <img className="" src={logos} alt="" srcset="" />
            <p className="flex justify-center items-center gap-1 text-base">
              <CiLocationOn></CiLocationOn>
              Chhagalnaiya, Feni, Bangladesh 3911
            </p>
            <p className="flex justify-center items-center gap-1 text-base">
              <MdOutlineMail></MdOutlineMail>
              kb71@gmail.com
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Food</a>
            <a className="link link-hover">Animal</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Accessories</a>
          </nav>
          <nav>
            <h6 className="footer-title">Quick Links</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Other</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
        </div> 
    );
};

export default AcccessoriesFooters;