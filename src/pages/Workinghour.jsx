import React from "react";
import Link from "next/link";

const WorkingHour = () => {
  return (
    <div>
    
      {/* <!-- Page Header Start --> */}
      <div
        class="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container text-center py-5">
          <h1 class="display-3 text-white text-uppercase mb-3 animated slideInDown">
            Working Hours
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb justify-content-center text-uppercase mb-0">
              <li class="breadcrumb-item">
                <Link class="text-white" href="#">
                  Home
                </Link >
              </li>
              <li class="breadcrumb-item">
                <Link class="text-white" href="#">
                  Pages
                </Link >
              </li>
              <li
                class="breadcrumb-item text-primary active"
                aria-current="page"
              >
                Working Hours
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Working Hours Start --> */}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-0">
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div class="h-100">
                <img class="img-fluid h-100" src="images/open.jpg" alt="" />
              </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div class="bg-secondary h-100 d-flex flex-column justify-content-center p-5">
                <p class="d-inline-flex bg-dark text-primary py-1 px-4 me-auto">
                  Working Hours
                </p>
                <h1 class="text-uppercase mb-4">
                  Professional Barbers Are Waiting For You
                </h1>
                <div>
                  <div class="d-flex justify-content-between border-bottom py-2">
                    <h6 class="text-uppercase mb-0">Monday</h6>
                    <span class="text-uppercase">09 AM - 09 PM</span>
                  </div>
                  <div class="d-flex justify-content-between border-bottom py-2">
                    <h6 class="text-uppercase mb-0">Tuesday</h6>
                    <span class="text-uppercase">09 AM - 09 PM</span>
                  </div>
                  <div class="d-flex justify-content-between border-bottom py-2">
                    <h6 class="text-uppercase mb-0">Wednesday</h6>
                    <span class="text-uppercase">09 AM - 09 PM</span>
                  </div>
                  <div class="d-flex justify-content-between border-bottom py-2">
                    <h6 class="text-uppercase mb-0">Thursday</h6>
                    <span class="text-uppercase">09 AM - 09 PM</span>
                  </div>
                  <div class="d-flex justify-content-between border-bottom py-2">
                    <h6 class="text-uppercase mb-0">Friday</h6>
                    <span class="text-uppercase">09 AM - 09 PM</span>
                  </div>
                  <div class="d-flex justify-content-between py-2">
                    <h6 class="text-uppercase mb-0">Sat / Sun</h6>
                    <span class="text-uppercase text-primary">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Working Hours End --> */}

    
    </div>
  );
};

export default WorkingHour;
