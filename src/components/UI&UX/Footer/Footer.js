import React from "react";
import "./FooteStyle.css";
const Footer = () => {
  return (
    <div className="bg">
      <hr className="mt-4" />
      <div className="row container-fluid p-5">
        <div className="col-lg-3">
          <img src="/images/logoWeb.png" alt="" id="footer-img" />
          <br />
          <p>
            <label htmlFor="" className="mt-4 text-dark">
              0845710208
            </label>{" "}
            <br />
            <label htmlFor="">Tổng đài hỗ trợ (Thứ 2 - Thứ 7 8h00 - 21h)</label>
          </p>
          <p className="mt-4">
            <label htmlFor="" className="text-dark">
              PerWatt@gmail.com.vn
            </label>
            <br />
            <label htmlFor="">Gửi mail cho chúng tôi</label>
          </p>
          <div className="d-flex">
            <a href="https://www.facebook.com/thinh.t.quoc">
              <i class="bi bi-facebook fs-1"></i>
            </a>
            <a href="https://zalo.me/0845710208" className="mx-3 mt-1">
              <img src="/images/icons8-zalo-48.png" alt="" />
            </a>
          </div>
        </div>
        <div className="col-lg-3">
          <p>
            <label htmlFor="" className="text-dark fs-5">
              Chính sách
            </label>
          </p>
          <ul className="p-2">
            <li className="mb-4">
              {" "}
              <label htmlFor="">Chính sách và quy định</label>
            </li>
            <li className="mb-4">
              <label htmlFor="">Quy chế hoạt động</label>
            </li>
            <li className="mb-4">
              {" "}
              <label htmlFor="">Giải quyết tranh chấp</label>
            </li>
          </ul>
        </div>
        <div className="col-lg-3">
          <p>
            <label htmlFor="" className="text-dark fs-5">
              Về PerWatt
            </label>
          </p>
          <ul className="p-2">
            <li className="mb-4">
              <label htmlFor="">Điều khoản</label>
            </li>
            <li className="mb-4">
              <label htmlFor="">Giới thiệu về PerWatt</label>
            </li>
            <li className="mb-4">Cách thức liên hệ</li>
            <li className="mb-4">Hỗ trợ ván đáp</li>
          </ul>
        </div>
        <div className="col-lg-3">
          <p>
            <label htmlFor="" className="text-dark fs-5">
              Đối tác
            </label>
          </p>
          <ul className="p-2">
            <li className="mb-4">
              <label htmlFor="" className="text-dark">
                thinhtran24082004@gmail.com
              </label>
              <br />
              <label htmlFor="">Developer</label>
            </li>
            <li className="mb-4">
              <label htmlFor="" className="text-dark">
                toanvk@gmail.com
              </label>
              <br />
              <label htmlFor="">Developer</label>
            </li>
            <li className="mb-4">
              <label htmlFor="" className="text-dark">
                hunghp@gmail.com
              </label>
              <br />
              <label htmlFor="">Developer</label>
            </li>
            <li className="mb-4">
              <label htmlFor="" className="text-dark">
               nheht@gmail.com
              </label>
              <br />
              <label htmlFor="">Developer</label>
            </li>
            <li className="mb-4">
              <label htmlFor="" className="text-dark">
                thanhtt@gmail.com
              </label>
              <br />
              <label htmlFor="">Developer</label>
            </li>
            <li className="mb-4">
              <label htmlFor="" className="text-dark">
                thanhvh@gmail.com
              </label>
              <br />
              <label htmlFor="">Developer</label>
            </li>
          </ul>
        </div>
        <hr />
        <div className="d-flex justify-content-evenly mt-2 mb-4">
            <label>Nhóm thực hiện: Nhóm PerWatt</label>
            <label>Ngày bắt đầu: 26/07/2024</label>
            <label>Nơi cấp: Cao đẳng FPT Polytechnic Cần Thơ</label>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Footer;
