import parse from "html-react-parser";
import { getArticle } from "../../lib/api";
import { useRouter } from "next/router";
import $ from "jquery";
import { useEffect } from "react";
import juice from "juice";
// import Comment from '../../components/comment'

export default function newsletterss({ newsletter, slug }) {
  const router = useRouter();
  const copyElem = () => {
    const element = document.getElementById("htmlContent");

    const finalHtml = element.outerHTML;

    navigator.clipboard.writeText(finalHtml).then(() => {
      alert("Copied!");
    });
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handDrawn = newsletter?.featuredImage?.node?.sourceUrl;
  const Logo = newsletter?.newsletterLogo?.logo?.sourceUrl;

  var newsletterContent = newsletter?.content;
  if (newsletterContent) {
    var content = newsletterContent;
  } else {
    content = "";
  }

  useEffect(() => {
    $("figure").css("margin", 0);
    $("figure img").css({ width: "100%", height: "auto" });
  }, []);

  return (
    <>
      <div id="htmlContent">
        <head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta content="width=device-width" name="viewport" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap"
            rel="stylesheet"
            type="text/css"
          />
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html: `
    /* cyrillic-ext */
@font-face {
  font-family: 'Merriweather';
  font-style: italic;
  font-weight: 300 900;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/merriweather/v33/u-4r0qyriQwlOrhSvowK_l5-eTxCVw8XP0LuKH2Gy9thm7XCJbONwl7r.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Merriweather';
  font-style: italic;
  font-weight: 300 900;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/merriweather/v33/u-4r0qyriQwlOrhSvowK_l5-eTxCVw8XP0LuKH2Gy9thkrXCJbONwl7r.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Merriweather';
  font-style: italic;
  font-weight: 300 900;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/merriweather/v33/u-4r0qyriQwlOrhSvowK_l5-eTxCVw8XP0LuKH2Gy9thmbXCJbONwl7r.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Merriweather';
  font-style: italic;
  font-weight: 300 900;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/merriweather/v33/u-4r0qyriQwlOrhSvowK_l5-eTxCVw8XP0LuKH2Gy9thmLXCJbONwl7r.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Merriweather';
  font-style: italic;
  font-weight: 300 900;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/merriweather/v33/u-4r0qyriQwlOrhSvowK_l5-eTxCVw8XP0LuKH2Gy9thlrXCJbONwg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 300 900;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/merriweather/v33/u-4t0qyriQwlOrhSvowK_l5UcA6ht3ZEqezpPbXEE5NRlL_FB7G9ww.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 300 900;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/merriweather/v33/u-4t0qyriQwlOrhSvowK_l5UcA6ht3ZEqezpPbXEE5pRlL_FB7G9ww.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 300 900;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/merriweather/v33/u-4t0qyriQwlOrhSvowK_l5UcA6ht3ZEqezpPbXEE5FRlL_FB7G9ww.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 300 900;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/merriweather/v33/u-4t0qyriQwlOrhSvowK_l5UcA6ht3ZEqezpPbXEE5BRlL_FB7G9ww.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 300 900;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/merriweather/v33/u-4t0qyriQwlOrhSvowK_l5UcA6ht3ZEqezpPbXEE55RlL_FB7E.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
body {
  margin: 0;
  padding: 0;
}

hr {
  margin: 12px 0;
  border-top: 1px dotted #333;
}

b,
strong {
  font-weight: bold !important;
}

blockquote {
  width: 350px;
  margin: 0 auto;
}

blockquote p {
  margin: 0;
}

h2 {
  margin: 24px 0 0;
  font-size: 17px;
  line-height: 160%;
  font-family: Merriweather, Times, "Times New Roman", serif;
  color: rgb(51, 51, 51);
}

h3 {
  margin: 24px 0 0;
  font-size: 17px;
  line-height: 1;
  font-family: Merriweather, Times, "Times New Roman", serif;
  color: rgb(51, 51, 51);
  
}

p {
  margin: 8px 0 0;
  font-size: 16px;
  line-height: 24px;
  font-family: Merriweather, Times, "Times New Roman", serif;
  color: rgb(23, 23, 23);
  font-weight: 400;
}

p code {
  display: table;
  font-style: italic;
  font-size: 16px;
  line-height: 24px;
  font-family: Merriweather, Times, "Times New Roman", serif;
  color: rgb(51, 51, 51);
  margin-top: 22px;
  margin-bottom: 22px;
}

li{
  font-size: 16px;
  line-height: 24px;
  font-family: Merriweather, Times, "Times New Roman", serif;
  color: rgb(23, 23, 23);
}

blockquote p em {
    font-family: Merriweather, Times, "Times New Roman", serif !important;
    font-size: 24px !important;
    line-height: 31px !important;
    color: #333 !important;
    letter-spacing: -0.24px !important;
    margin: 12px 0 0 !important;
}

.bottom-row{
  display: flex !important;
}

.end-text{
    font-family: Merriweather, Times, "Times New Roman", serif !important;
    font-weight: 700 !important;
    font-size: 12px !important;
    line-height: 19px !important;
    color: rgb(51, 51, 51) !important;
    display: block !important;
}

.read-here-link{
  font-family: Merriweather, Times, "Times New Roman", serif;
  font-weight: 400;
  font-size: 9px;
  line-height: 14px;
  color: rgb(51, 51, 51);
  letter-spacing: 0.54px;
}

.end-text-bold{
  font-family: Merriweather, Times, "Times New Roman", serif !important;
  font-weight: 700 !important;
  font-size: 12px !important;
  line-height: 19px !important;
  color: rgb(235, 87, 87) !important;
}

.subscribe-cont p{
  font-size: 12px !important;
  line-height: 16px !important;
  margin: 0px !important;
  width: 410px !important;
  font-family: Merriweather, Times, "Times New Roman", serif !important;
  letter-spacing: normal !important;
  color: rgb(23, 23, 23) !important;
  font-weight: 400 !important;
}

.img-bottom{
  font-family: Merriweather, Times, "Times New Roman", serif !important;
  font-weight: 400 !important;
  font-size: 9px !important;
  line-height: 14px !important;
  color: rgb(130, 130, 130) !important;
  font-style: italic !important;
}

.lets-talk-head{
  text-decoration: none !important;
}

.lets-talk-head span{
  font-size: 24px;
  line-height: 31px;
  /* text-decoration: underline; */
  font-style: italic;
  font-family: Merriweather, Times, "Times New Roman", serif !important;
  border-bottom: 1px dashed;
}

a{
  text-decoration: none !important;
}

img {
  display: none;
  width: 100%;
  height: auto;
}

table img {
  display: block;
  width: 100%;
}

iframe {
  width: 100% !important;
}

table,
td,
tr {
  vertical-align: top;
  border-collapse: collapse;
}

* {
  line-height: inherit;
}

a[x-apple-data-detectors="true"] {
  color: inherit !important;
}
`,
            }}
          />

          <style
            id="media-query"
            type="text/css"
            dangerouslySetInnerHTML={{
              __html: `
.cfs-hyperlink {
  font-style: italic !important;
  font-size: 16px !important;
  letter-spacing: -0.1px !important;
  color: #171717 !important;
}

a,
a:visited {
  text-decoration: underline !important;
  color: #171717 !important;
}

.article-headline a,
.article-headline a:visited {
  text-decoration: none !important;
}

.banner-cont {
  position: relative;
}

.snow-flake-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top center;
}

.snow-flake-dek {
  display: block;
}

.snow-flake-mob {
  display: none;
}

@media (max-width: 620px) {
  .snow-flake-dek {
    display: none;
  }

  .snow-flake-mob {
    display: block;
  }

  .block-grid,
  .col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
    width: 100% !important;
  }

  .col > div {
    margin: 0 auto;
  }

  img.fullwidth,
  img.fullwidthOnMobile {
    max-width: 100% !important;
  }

  .no-stack .col {
    min-width: 0 !important;
    display: table-cell !important;
  }

  .no-stack.two-up .col,
  .no-stack .col.num6 {
    width: 50% !important;
  }

  .no-stack .col.num4 {
    width: 33% !important;
  }

  .no-stack .col.num8 {
    width: 66% !important;
  }

  .no-stack .col.num3 {
    width: 25% !important;
  }

  .no-stack .col.num9 {
    width: 75% !important;
  }

  .video-block {
    max-width: none !important;
  }

  .mobile_hide {
    display: none;
    overflow: hidden;
    font-size: 0;
    max-height: 0;
    max-width: 0;
  }

  .desktop_hide {
    display: block !important;
    max-height: none !important;
  }

  .title-cont,
  .logo-cont {
    float: left;
    min-width: auto !important;
  }

  .title-cont {
    width: 60% !important;
  }

  .logo-cont {
    width: 40% !important;
  }

  .title-cont p {
    font-size: 32px !important;
    font-weight: 900 !important;
    line-height: 31px !important;
    letter-spacing: -0.5px !important;
  }

  .newsletter-container {
    padding: 0 16px !important;
  }

  .newsletter-title {
    padding: 0 0 17px !important;
  }

  .article-meta {
    padding: 20px 10px 0 !important;
  }

  .article-headline {
    padding: 0 10px 12px !important;
  }

  .article-meta p,
  .article-headline p span {
    font-size: 12px !important;
    line-height: 28px !important;
    color: #828282 !important;
  }

  .article-headline p {
    font-size: 26px !important;
    line-height: 30px !important;
    color: #171717 !important;
  }

  .article-content {
    padding: 0 10px 25px !important;
  }

  .about-company {
    padding: 20px 0 45px !important;
  }

  .about-company-text {
    padding: 0 !important;
  }

  .about-company-text p span {
    font-size: 16px !important;
    font-weight: bold !important;
    line-height: 22px !important;
    color: #171717 !important;
  }

  .button-container {
    padding: 0 !important;
  }

  .lets-talk-btn {
    padding: 0 0 45px !important;
  }

  .social-icons-cont {
    padding: 0 0 20px !important;
  }

  .social-icons {
    float: left !important;
    width: 50% !important;
  }

  .social-icons tr td {
    padding: 0 30px 0 0 !important;
  }

  .subscribe-cont {
    padding: 0 0 40px !important;
  }

  .subscribe-cont p {
    font-size: 12px !important;
    letter-spacing: -0.08px !important;
    color: #171717 !important;
  }

  .the-yellow-envelope {
    font-size: 32px !important;
    line-height: 31px !important;
    letter-spacing: -0.5px !important;
    margin-bottom: 2px !important;
  }

  .the-yellow-envelope-number {
    font-size: 27px !important;
    line-height: 31px !important;
  }

  .letter-text {
    padding: 0 16px !important;
  }

  .newsletter-container { padding: 12px !important; }
  .newsletter-title { padding: 0 !important; }
  .letter-upper-body{padding: 0 !important;}
  .letter-text { padding: 16px !important; }
  .about-company { padding: 20px 16px !important; }
  .lets-talk-btn { padding: 0 16px 0 !important; width: 70% !important; }
  .social-icons-cont { padding: 16px !important; width: 100% !important; }
  .subscribe-cont { padding: 20px 16px 40px !important; }
  blockquote { width: 100% !important; }
  .social-icons td { padding-right: 10px !important; }
  .subscribe-cont p{ width: 100% !important;}

  .mid-child {display:none !important}
  .first-child, .last-child {width: 50% !important}
  .last-child {text-align: right !important}
  .midd-padding-zero { 
    padding-top: 0!important;
  }
  .mobile-show {display: block !important;}
  .mobile-margin{margin-bottom: 0 !important;}

  h3 {
    line-height: 160%;
  }
}
`,
            }}
          />
        </head>

        <body
          className="clean-body"
          style={{ margin: 0, padding: 0, WebkitTextSizeAdjust: "100%" }}
        >
          <table
            background="https://images.ctfassets.net/d3a4e93836in/1kdZ2WvHYl9jF2zRer42LU/9f247405542b9f0e9b835382084eb20c/Desktop_-_6.png"
            cellPadding={0}
            cellSpacing={0}
            className="nl-container"
            role="presentation"
            style={{
              tableLayout: "fixed",
              verticalAlign: "top",
              minWidth: 320,
              margin: "0 auto",
              borderSpacing: 0,
              borderCollapse: "collapse",
              msoTableLspace: "0pt",
              msoTableRspace: "0pt",
              width: "100%",
            }}
            valign="top"
            width="100%"
          >
            <tbody>
              <tr style={{ verticalAlign: "top" }} valign="top">
                <td
                  style={{
                    wordBreak: "break-word",
                    verticalAlign: "top",
                    padding: "20px 0 90px 0",
                  }}
                  valign="top"
                  className="newsletter-container"
                >
                  <div
                    style={{ backgroundColor: "transparent" }}
                    className="banner-cont"
                  >
                    <div
                      className="block-grid two-up"
                      style={{
                        position: "relative",
                        margin: "0 auto",
                        minWidth: 320,
                        maxWidth: 650,
                        overflowWrap: "break-word",
                        wordWrap: "break-word",
                        wordBreak: "break-word",
                        backgroundColor: "#F4F1EA",
                      }}
                    >
                      <div
                        style={{
                          borderCollapse: "collapse",
                          display: "table",
                          width: "100%",
                          backgroundColor: "transparent",
                        }}
                      >
                        <div
                          className="col num6 title-cont"
                          style={{
                            maxWidth: 320,
                            minWidth: 300,
                            display: "table-cell",
                            verticalAlign: "top",
                            width: 300,
                          }}
                        >
                          <div style={{ width: "100% !important" }}>
                            <div
                              style={{
                                borderTop: "0px solid transparent",
                                borderLeft: "0px solid transparent",
                                borderBottom: "0px solid transparent",
                                borderRight: "0px solid transparent",
                                paddingTop: 40,
                                paddingBottom: 5,
                                paddingRight: 30,
                                paddingLeft: 30,
                              }}
                            >
                              <div
                                style={{
                                  color: "#171717",
                                  fontFamily:
                                    "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                                  lineHeight: "1.2",
                                  paddingTop: 40,
                                  paddingRight: 30,
                                  paddingBottom: 0,
                                  paddingLeft: 30,
                                }}
                                className="newsletter-title"
                              >
                                <div
                                  style={{
                                    fontFamily:
                                      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                                    fontSize: 12,
                                    lineHeight: "1.2",
                                    color: "#171717",
                                    msoLineHeightAlt: 14,
                                  }}
                                >
                                  <p
                                    style={{
                                      fontSize: 38,
                                      lineHeight: 1,
                                      msoLineHeightAlt: 46,
                                      margin: 0,
                                    }}
                                  >
                                    <a
                                      href={`https://icd-india.com/scarlet-letter/${slug}`}
                                      tabIndex={-1}
                                      target="_blank"
                                    >
                                      <span
                                        className="the-yellow-envelope"
                                        style={{
                                          fontSize: 40,
                                          lineHeight: 36 + "px",
                                          marginBottom: 4,
                                        }}
                                      >
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          align="right"
                                          alt="Image"
                                          border={0}
                                          className="right autowidth"
                                          src={Logo}
                                          style={{
                                            textDecoration: "none",
                                            msInterpolationMode: "bicubic",
                                            height: "auto",
                                            border: "none",
                                            width: "138",
                                            maxWidth: 138,
                                            float: "none",
                                            display: "block",
                                          }}
                                          title="Image"
                                          width={172}
                                        />
                                      </span>
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col num6 logo-cont"
                          style={{
                            maxWidth: 320,
                            minWidth: 300,
                            display: "table-cell",
                            verticalAlign: "top",
                            width: 300,
                          }}
                        >
                          <div style={{ width: "100% !important" }}>
                            <div
                              className="iconWrapper"
                              style={{
                                borderTop: "0px solid transparent",
                                borderLeft: "0px solid transparent",
                                borderBottom: "0px solid transparent",
                                borderRight: "0px solid transparent",
                                paddingTop: 40,
                                paddingBottom: 5,
                                paddingRight: 30,
                                paddingLeft: 30,
                              }}
                            >
                              <div className="mobile_hide">
                                <div
                                  align="right"
                                  className="img-container right autowidth"
                                  style={{ paddingRight: 0, paddingLeft: 0 }}
                                >
                                  <a
                                    href="https://www.icdindia.com"
                                    tabIndex={-1}
                                    target="_blank"
                                  >
                                    {" "}
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      align="right"
                                      alt="Image"
                                      border={0}
                                      className="right autowidth"
                                      src="https://images.ctfassets.net/da6fwo03rafe/4Tv7hpgKghXki0lHZGty22/77eaa58963bdee80e3f5fffcd34cec11/Group.png"
                                      style={{
                                        textDecoration: "none",
                                        msInterpolationMode: "bicubic",
                                        height: "auto",
                                        border: "none",
                                        width: "100%",
                                        maxWidth: 42,
                                        float: "none",
                                        display: "block",
                                      }}
                                      title="Image"
                                      width={172}
                                    />
                                  </a>
                                </div>
                              </div>
                              <div
                                className="desktop_hide mobile-logo"
                                style={{
                                  msoHide: "all",
                                  display: "none",
                                  maxHeight: 0,
                                  overflow: "hidden",
                                }}
                              >
                                <div
                                  align="right"
                                  className="img-container right autowidth"
                                  style={{ paddingRight: 0, paddingLeft: 0 }}
                                >
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    align="right"
                                    alt="Image"
                                    border={0}
                                    className="right autowidth"
                                    src="http://icdlabs.in/icd-blog/wp-content/themes/kotha/assets/images/logo_red_mob.png"
                                    style={{
                                      textDecoration: "none",
                                      msInterpolationMode: "bicubic",
                                      border: 0,
                                      height: "auto",
                                      width: "100%",
                                      maxWidth: 54,
                                      float: "none",
                                      display: "block",
                                    }}
                                    title="Image"
                                    width={54}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="block-grid"
                    style={{
                      margin: "0 auto",
                      minWidth: 320,
                      maxWidth: 650,
                      overflowWrap: "break-word",
                      wordWrap: "break-word",
                      wordBreak: "break-word",
                    }}
                  >
                    <div
                      className="col num12"
                      style={{
                        minWidth: 320,
                        maxWidth: 650,
                        display: "table-cell",
                        verticalAlign: "top",
                        width: 650,
                        background: "#F4F1EA",
                      }}
                    >
                      <div style={{ width: "100% !important" }}>
                        <div
                          className="letter-upper-body"
                          style={{
                            borderTop: "0px solid transparent",
                            borderLeft: "0px solid transparent",
                            borderBottom: "0px solid transparent",
                            borderRight: "0px solid transparent",
                            paddingTop: 30,
                            paddingBottom: 0,
                            paddingRight: 30,
                            paddingLeft: 30,
                          }}
                        >
                          <div
                            className="letter-text"
                            style={{
                              fontFamily:
                                "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                              lineHeight: "1.2",
                              paddingTop: 30,
                              paddingRight: 30,
                              paddingBottom: 0,
                              paddingLeft: 30,
                              background: "#F4F1EA",
                            }}
                          >
                            <div
                              style={{
                                fontFamily:
                                  "Merriweather,Times,Times New Roman,serif",
                                fontSize: 16,
                                lineHeight: 25 + "px",
                                color: "#171717 !important",
                              }}
                            >
                              <div className="email-container">
                                {parse(content)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ backgroundColor: "transparent" }}>
                    <div
                      className="block-grid"
                      style={{
                        margin: "0 auto",
                        minWidth: 320,
                        maxWidth: 650,
                        overflowWrap: "break-word",
                        wordWrap: "break-word",
                        wordBreak: "break-word",
                        backgroundColor: "transparent",
                      }}
                    >
                      <div
                        style={{
                          borderCollapse: "collapse",
                          display: "table",
                          width: "100%",
                          backgroundColor: "transparent",
                        }}
                      >
                        <div
                          className="col num12"
                          style={{
                            minWidth: 320,
                            maxWidth: 650,
                            display: "table-cell",
                            verticalAlign: "top",
                            width: 650,
                            background: "#F4F1EA",
                          }}
                        >
                          <div style={{ width: "100% !important" }}>
                            <div
                              className="about-company midd-padding-zero"
                              style={{
                                borderTop: "0px solid transparent",
                                borderLeft: "0px solid transparent",
                                borderBottom: "0px solid transparent",
                                borderRight: "0px solid transparent",
                                paddingTop: 0,
                                paddingBottom: 30,
                                paddingRight: 30,
                                paddingLeft: 30,
                                background: "#F4F1EA",
                              }}
                            >
                              <div
                                className="about-company-text"
                                style={{
                                  color: "#171717",
                                  fontFamily:
                                    '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
                                  lineHeight: "1.2",
                                  paddingTop: 0,
                                  paddingBottom: 0,
                                }}
                              >
                                <div
                                  className="bottom-row"
                                  style={{
                                    fontFamily:
                                      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                                    fontSize: 12,
                                    lineHeight: "1.2",
                                    color: "#171717",
                                    msoLineHeightAlt: 14,
                                    display: "flex",
                                  }}
                                >
                                  <span className="first-child">
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      align="right"
                                      alt="Image"
                                      border={0}
                                      className="right autowidth"
                                      src="https://images.ctfassets.net/da6fwo03rafe/5W8FPsTIefK1xGAGObOLeA/d14f00352fe7335cdc84ff3e2c69fb8d/Frame_2147263006.png"
                                      style={{
                                        textDecoration: "none",
                                        msInterpolationMode: "bicubic",
                                        height: "auto",
                                        border: "none",
                                        width: "88",
                                        maxWidth: 88,
                                        maxHeight: 40,
                                        height: "40",
                                        float: "none",
                                        display: "block",
                                      }}
                                      title="Image"
                                      width={172}
                                    />
                                    <span
                                      className="img-bottom"
                                      style={{
                                        fontFamily:
                                          "Merriweather,Times,Times New Roman,serif",
                                        fontWeight: "400",
                                        fontSize: 9,
                                        lineHeight: 14 + "px",
                                        color: "#828282",
                                        fontStyle: "italic",
                                      }}
                                    >
                                      midjourney + me
                                    </span>
                                  </span>
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    align="right"
                                    alt="Image"
                                    border={0}
                                    className="right mid-child autowidth"
                                    src={handDrawn}
                                    style={{
                                      textDecoration: "none",
                                      msInterpolationMode: "bicubic",
                                      height: "auto",
                                      border: "none",
                                      width: "180",
                                      maxWidth: 180,
                                      float: "none",
                                      display: "block",
                                      margin: "0 100px",
                                    }}
                                    title="Image"
                                    width={172}
                                  />
                                  <div className="last-child">
                                    <span
                                      className="end-text"
                                      style={{
                                        fontFamily:
                                          "Merriweather,Times,Times New Roman,serif",
                                        fontWeight: "700",
                                        fontSize: 12,
                                        lineHeight: 19 + "px",
                                        color: "#333",
                                        display: "block",
                                      }}
                                    >
                                      Why call it
                                    </span>
                                    <span
                                      className="end-text end-text-bold"
                                      style={{
                                        fontFamily:
                                          "Merriweather,Times,Times New Roman,serif",
                                        fontWeight: "700",
                                        fontSize: 12,
                                        lineHeight: 19 + "px",
                                        color: "#EB5757",
                                      }}
                                    >
                                      The Scarlet Letter
                                    </span>
                                    <a
                                      className="read-here-link"
                                      href="https://icd-india.com/"
                                      tabIndex={-1}
                                      target="_blank"
                                      style={{ display: "block", marginTop: 4 }}
                                    >
                                      <span
                                        style={{
                                          fontFamily:
                                            "Merriweather,Times,Times New Roman,serif",
                                          fontWeight: "400",
                                          fontSize: 9,
                                          lineHeight: 14 + "px",
                                          color: "#333",
                                          letterSpacing: 0.54 + "px",
                                        }}
                                      >
                                        READ HERE
                                      </span>
                                    </a>
                                  </div>
                                </div>
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  align="right"
                                  alt="Image"
                                  border={0}
                                  className="right mobile-show autowidth"
                                  src={handDrawn}
                                  style={{
                                    textDecoration: "none",
                                    msInterpolationMode: "bicubic",
                                    display: "block",
                                    height: "auto",
                                    border: "none",
                                    width: "180",
                                    maxWidth: 100 + "%",
                                    float: "none",
                                    display: "none",
                                    margin: "24px 0 0",
                                  }}
                                  title="Image"
                                  width={172}
                                />
                              </div>
                              <hr
                                class="wp-block-separator has-alpha-channel-opacity mobile-margin"
                                style={{
                                  margin: "24px 0",
                                  borderTop: "1px dotted #333",
                                }}
                              ></hr>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ backgroundColor: "transparent" }}>
                    <div
                      className="block-grid"
                      style={{
                        margin: "0 auto",
                        minWidth: 320,
                        maxWidth: 650,
                        overflowWrap: "break-word",
                        wordWrap: "break-word",
                        wordBreak: "break-word",
                        backgroundColor: "transparent",
                      }}
                    >
                      <div
                        style={{
                          borderCollapse: "collapse",
                          display: "table",
                          width: "100%",
                          backgroundColor: "transparent",
                        }}
                      >
                        <div
                          className="col num12"
                          style={{
                            minWidth: 320,
                            maxWidth: 650,
                            display: "table-cell",
                            verticalAlign: "top",
                            width: 650,
                          }}
                        >
                          <div style={{ width: "100% !important" }}>
                            <div
                              className="about-company midd-padding-zero"
                              style={{
                                borderTop: "0px solid transparent",
                                borderLeft: "0px solid transparent",
                                borderBottom: "0px solid transparent",
                                borderRight: "0px solid transparent",
                                paddingTop: 0,
                                paddingBottom: 20,
                                paddingRight: 30,
                                paddingLeft: 30,
                                background: "#F4F1EA",
                              }}
                            >
                              <div
                                className="about-company-text"
                                style={{
                                  color: "#171717",
                                  fontFamily:
                                    '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
                                  lineHeight: "1.2",
                                  paddingTop: 0,
                                  paddingBottom: 0,
                                }}
                              >
                                <div
                                  style={{
                                    fontFamily:
                                      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                                    fontSize: 12,
                                    lineHeight: "1.2",
                                    color: "#171717",
                                    msoLineHeightAlt: 14,
                                  }}
                                >
                                  <p
                                    style={{
                                      fontFamily:
                                        "Merriweather,Times,Times New Roman,serif",
                                      fontWeight: "400",
                                      fontSize: 16,
                                      lineHeight: 24 + "px",
                                    }}
                                  >
                                    <strong
                                      style={{
                                        fontFamily:
                                          "Merriweather,Times,Times New Roman,serif",
                                        fontWeight: "700",
                                        fontSize: 17,
                                        lineHeight: 27.2 + "px",
                                      }}
                                    >
                                      ICD partners with enterprises ready to
                                      become AI-first.
                                    </strong>
                                    <br />
                                    We help businesses redesign the way they
                                    work, decide, and grow through AI-led
                                    product thinking, enterprise experience
                                    design, and strategic brand communication.
                                    For leaders looking to move beyond
                                    experimentation, ICD turns AI into systems,
                                    experiences, and advantages that scale.
                                  </p>
                                </div>
                              </div>
                              <hr
                                class="wp-block-separator has-alpha-channel-opacity"
                                style={{
                                  margin: "20px 0",
                                  borderTop: "1px dotted #333",
                                }}
                              ></hr>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ backgroundColor: "transparent" }}>
                    <div
                      className="block-grid two-up"
                      style={{
                        margin: "0 auto",
                        minWidth: 320,
                        maxWidth: 650,
                        overflowWrap: "break-word",
                        wordWrap: "break-word",
                        wordBreak: "break-word",
                        backgroundColor: "#F4F1EA",
                      }}
                    >
                      <div
                        style={{
                          borderCollapse: "collapse",
                          display: "table",
                          width: "100%",
                          backgroundColor: "transparent",
                        }}
                      >
                        <div
                          className="col num6"
                          style={{
                            display: "table-cell",
                            verticalAlign: "top",
                            width: "36%",
                          }}
                        >
                          <div
                            className="block-grid"
                            style={{
                              margin: "0 auto",
                              overflowWrap: "break-word",
                              wordWrap: "break-word",
                              wordBreak: "break-word",
                              backgroundColor: "transparent",
                            }}
                          >
                            <div
                              style={{
                                borderCollapse: "collapse",
                                display: "table",
                                width: "100%",
                                backgroundColor: "transparent",
                              }}
                            >
                              <div
                                className="col num12"
                                style={{
                                  display: "table-cell",
                                  verticalAlign: "top",
                                }}
                              >
                                <div style={{ width: "100% !important" }}>
                                  <div
                                    className="lets-talk-btn"
                                    style={{
                                      borderTop: "0px solid transparent",
                                      borderLeft: "0px solid transparent",
                                      borderBottom: "0px solid transparent",
                                      borderRight: "0px solid transparent",
                                      paddingTop: 0,
                                      paddingBottom: 13,
                                      paddingRight: 30,
                                      paddingLeft: 30,
                                      background: "#F4F1EA",
                                    }}
                                  >
                                    <div
                                      align="left"
                                      className="button-container"
                                      style={{
                                        paddingTop: 0,
                                        paddingRight: 0,
                                        paddingBottom: 0,
                                        paddingLeft: 0,
                                      }}
                                    >
                                      <a
                                        className="lets-talk-head"
                                        href="https://www.icdindia.com/contact/"
                                        style={{
                                          WebkitTextSizeAdjust: "none",
                                          textDecoration: "none",
                                          display: "inline-block",
                                          color: "#171717",
                                          backgroundColor: "transparent",
                                          borderRadius: 4,
                                          WebkitBorderRadius: 0,
                                          MozBorderRadius: 4,
                                          width: "auto",
                                          borderTop: "1px solid transparent",
                                          borderRight: "1px solid transparent",
                                          borderBottom: "1px dotted #171717",
                                          borderLeft: "1px solid transparent",
                                          paddingTop: 0,
                                          paddingBottom: 0,
                                          fontFamily:
                                            "Merriweather,Times,Times New Roman,serif",
                                          textAlign: "center",
                                          msoBorderAlt: "none",
                                          wordBreak: "keep-all",
                                        }}
                                        target="_blank"
                                      >
                                        <span
                                          style={{
                                            fontSize: 24,
                                            lineHeight: 31 + "px",
                                            msoLineHeightAlt: 32,
                                          }}
                                        >
                                          Let’s talk.
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div style={{ width: "100% !important" }}>
                            <div
                              style={{
                                borderTop: "0px solid transparent",
                                borderLeft: "0px solid transparent",
                                borderBottom: "0px solid transparent",
                                borderRight: "0px solid transparent",
                                paddingTop: 0,
                                paddingBottom: 0,
                                paddingRight: 0,
                                paddingLeft: 0,
                              }}
                            >
                              <table
                                cellPadding={0}
                                cellSpacing={0}
                                className="social_icons"
                                role="presentation"
                                style={{
                                  tableLayout: "fixed",
                                  verticalAlign: "top",
                                  borderSpacing: 0,
                                  borderCollapse: "collapse",
                                  msoTableLspace: "0pt",
                                  msoTableRspace: "0pt",
                                }}
                                valign="top"
                                width="100%"
                              >
                                <tbody>
                                  <tr
                                    style={{ verticalAlign: "top" }}
                                    valign="top"
                                  >
                                    <td
                                      className="social-icons-cont"
                                      style={{
                                        wordBreak: "break-word",
                                        verticalAlign: "top",
                                        paddingTop: 0,
                                        paddingRight: 30,
                                        paddingBottom: 0,
                                        paddingLeft: 30,
                                      }}
                                      valign="top"
                                    >
                                      <table
                                        className="social-icons"
                                        activate="activate"
                                        align="left"
                                        alignment="alignment"
                                        cellPadding={0}
                                        cellSpacing={0}
                                        role="presentation"
                                        style={{
                                          tableLayout: "fixed",
                                          verticalAlign: "top",
                                          borderSpacing: 0,
                                          borderCollapse: "undefined",
                                          msoTableTspace: 0,
                                          msoTableRspace: 0,
                                          msoTableBspace: 0,
                                          msoTableLspace: 0,
                                        }}
                                        to="to"
                                        valign="top"
                                      >
                                        <tbody>
                                          <tr
                                            align="left"
                                            style={{
                                              verticalAlign: "top",
                                              display: "inline-block",
                                              textAlign: "left",
                                            }}
                                            valign="top"
                                          >
                                            <td
                                              style={{
                                                wordBreak: "break-word",
                                                verticalAlign: "top",
                                                paddingBottom: 28,
                                                paddingRight: 6,
                                              }}
                                              valign="top"
                                            >
                                              <a
                                                href="https://www.linkedin.com/company/itu-chaudhuri-design"
                                                target="_blank"
                                              >
                                                <img
                                                  loading="lazy"
                                                  decoding="async"
                                                  alt="LinkedIn"
                                                  height={20}
                                                  src="https://images.ctfassets.net/da6fwo03rafe/0gn5lFziKqdXIWrehCWkZ/200e2ebae990ca9e64a69804794a32f2/Group.png"
                                                  style={{
                                                    textDecoration: "none",
                                                    msInterpolationMode:
                                                      "bicubic",
                                                    height: "auto",
                                                    border: "none",
                                                    display: "block",
                                                    width: 20 + "px",
                                                  }}
                                                  title="LinkedIn"
                                                  width={20}
                                                />
                                              </a>
                                            </td>
                                            <td
                                              style={{
                                                wordBreak: "break-word",
                                                verticalAlign: "top",
                                                paddingBottom: 28,
                                                paddingRight: 6,
                                              }}
                                              valign="top"
                                            >
                                              <a
                                                href="https://www.instagram.com/ituchaudhuridesign"
                                                target="_blank"
                                              >
                                                <img
                                                  loading="lazy"
                                                  decoding="async"
                                                  alt="Instagram"
                                                  height={20}
                                                  src="https://images.ctfassets.net/da6fwo03rafe/5FiF2rVwJCwGICLnk5bU3W/6ce8d220e7e42865eadc86d7b3b23d1b/Group.png"
                                                  style={{
                                                    textDecoration: "none",
                                                    msInterpolationMode:
                                                      "bicubic",
                                                    height: "auto",
                                                    border: "none",
                                                    display: "block",
                                                    width: 20 + "px",
                                                  }}
                                                  title="Instagram"
                                                  width={20}
                                                />
                                              </a>
                                            </td>
                                            <td
                                              style={{
                                                wordBreak: "break-word",
                                                verticalAlign: "top",
                                                paddingBottom: 28,
                                                paddingRight: 6,
                                              }}
                                              valign="top"
                                            >
                                              <a
                                                href="https://www.icdindia.com"
                                                target="_blank"
                                              >
                                                <img
                                                  loading="lazy"
                                                  decoding="async"
                                                  alt="www.icdindia.com"
                                                  height={20}
                                                  src="https://images.ctfassets.net/da6fwo03rafe/1AbiMRtS3XarONhIVNwTsU/5dc369f9d483a866a0a569dd8969b945/Group_5.png"
                                                  style={{
                                                    textDecoration: "none",
                                                    msInterpolationMode:
                                                      "bicubic",
                                                    height: "auto",
                                                    border: "none",
                                                    display: "block",
                                                    width: 20 + "px",
                                                  }}
                                                  title="Custom"
                                                  width={20}
                                                />
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col num6"
                          style={{
                            display: "table-cell",
                            verticalAlign: "top",
                            paddingRight: 30,
                          }}
                        >
                          <div style={{ width: "100% !important" }}>
                            <div
                              style={{
                                borderTop: "0px solid transparent",
                                borderLeft: "0px solid transparent",
                                borderBottom: "0px solid transparent",
                                borderRight: "0px solid transparent",
                                paddingTop: 0,
                                paddingBottom: 5,
                                paddingRight: 0,
                                paddingLeft: 0,
                              }}
                            >
                              <div
                                className="subscribe-cont"
                                style={{
                                  color: "#171717",
                                  fontFamily:
                                    "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                                  lineHeight: "1.2",
                                  paddingTop: 0,
                                  paddingRight: 30,
                                  paddingBottom: 0,
                                  paddingLeft: 0,
                                }}
                              >
                                <div
                                  style={{
                                    fontFamily:
                                      "Merriweather,Times,Times New Roman,serif",
                                    fontSize: 12,
                                    lineHeight: "1.2",
                                    color: "#171717",
                                    msoLineHeightAlt: 14,
                                  }}
                                >
                                  <p
                                    style={{
                                      fontFamily:
                                        "Merriweather,Times,Times New Roman,serif",
                                      fontSize: 12,
                                      lineHeight: 16 + "px",
                                      msoLineHeightAlt: 17,
                                      margin: 0,
                                      width: 410 + "px",
                                    }}
                                  >
                                    You are receiving this newsletter because
                                    you have subscribed or have been recommended
                                    by a friend. If you'd like to add new
                                    subscribers, please click{" "}
                                    <a
                                      href="https://icd-india.com/newsletter-subscription"
                                      tabIndex={-1}
                                      target="_blank"
                                    >
                                      here
                                    </a>
                                    .<br /> And to unfollow, please click on the
                                    unsubscribe link.{" "}
                                    <a href="{{ unsubscribe }}">Unsubscribe</a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </body>
      </div>
      <button
        onClick={copyElem}
        style={{
          position: "fixed",
          top: 10,
          right: 10,
          zIndex: 9999,
          padding: "8px 16px",
          cursor: "pointer",
        }}
      >
        Copy HTML
      </button>
      <div className="copyField"></div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const article = await getArticle(params.slug);
  const rawContent = article.newsletter?.content ?? "";

  const emailStyles = `
    <style>
      body { margin: 0; padding: 0; }
      hr { margin: 24px 0; border-top: 1px dotted #333; }
      b, strong { font-weight: bold !important; }
      blockquote { margin: 0; width: 350px; margin-left: auto; margin-right: auto; }
      blockquote p { margin: 0; }
      img { width: 100%; height: auto; }
      table img { display: block; width: 100%; }
      ul { margin: 0 0 24px !important; padding-inline-start: 24px !important;}
      table, td, tr { vertical-align: top; border-collapse: collapse; }
      p {font-size: 16px; line-height: 24px; font-family: Merriweather, Times, 'Times New Roman', serif; color: #171717; margin-top: 8px; margin-bottom: 0; font-weight:400 }
      h2 { font-size: 17px; line-height: 160%; font-family: Merriweather, Times, 'Times New Roman', serif; color: #333; margin: 24px 0 0; }
      h3 { font-size: 17px; line-height: 1; font-family: Merriweather, Times, 'Times New Roman', serif; color: #333; margin: 24px 0 0;  }
      li { font-size: 16px; line-height: 24px; font-family: Merriweather, Times, 'Times New Roman', serif; color: #171717; }
      blockquote p em { font-size: 24px; line-height: 31px; color: #333; letter-spacing: -0.24px; }
      strong, b { font-weight: bold; }
      figure { margin: 0; }
      ul {margin: 0 0 24px !important; padding-inline-start: 24px !important;}
      figure img { width: 100%; height: auto; display: block; }
      p code { display: table;font-style: italic; font-size: 16px; line-height: 24px; font-family: Merriweather, Times, 'Times New Roman', serif; color: #333; margin-top: 22px; margin-bottom: 22px;  }
    </style>
  `;

  const inlinedContent = juice(emailStyles + rawContent);
  // mediaQueries appended after — not touched by juice
  // const finalHtml = mediaQueries + inlinedContent;
  return {
    props: {
      slug: params.slug, // 👈 pass it here
      newsletter: {
        ...article.newsletter,
        content: inlinedContent, // ✅ styles already inlined
      },
    },
    // revalidate: 2,
  };
}
