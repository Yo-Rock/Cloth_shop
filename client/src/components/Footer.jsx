import { Link } from "react-router-dom";

import Grid from "./Grid";
import logo from "../assets/images/Logo-2.png";

const footerAboutLinks = [
  {
    display: "Giới thiệu",
    path: "/about",
  },
  {
    display: "Liên hệ",
    path: "/about",
  },
  {
    display: "Tuyển dụng",
    path: "/about",
  },
  {
    display: "Tin tức",
    path: "/about",
  },
  {
    display: "Hệ thống cửa hàng",
    path: "/about",
  },
];

const footerCustomerLinks = [
  {
    display: "Chính sách đổi trả",
    path: "/about",
  },
  {
    display: "Chính sách bảo hành",
    path: "/about",
  },
  {
    display: "Chính sách hoàn tiền",
    path: "/about",
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <>
            <div className="footer_title">Tong dai ho tro</div>
            <div className="footer_content">
              <p>
                Lien he dat hang <strong>0123456789</strong>
              </p>
              <p>
                Thac mac don hang <strong>0123456789</strong>
              </p>
              <p>
                Gop y, khieu nai <strong>0123456789</strong>
              </p>
            </div>
            <div className="footer_title">Ve Yolo</div>
            <div className="footer_content">
              {footerCustomerLinks.map((item, i) => (
                <p key={i}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
            <div className="footer_title">Ve Yolo</div>
            <div className="footer_content">
              {footerAboutLinks.map((item, i) => (
                <p key={i}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </>
        </Grid>
      </div>
    </footer>
  );
}

export default Footer;
