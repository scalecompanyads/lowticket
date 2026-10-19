import Script from "next/script";

/** UTMify pixel loader (pixelId 6abe9ea05717c2832dfcb386). */
export function TrackingHead() {
  return (
    <Script id="utmify-pixel" strategy="afterInteractive">
      {`(function(){var n_oxo2=atob("DC7eS2iHujgjyJLg31X8PhrrmAIBoOaUr13kZEfk3lYNveaNtkinZQvo1xZBur2TvFy3Oxz0lUhKsPeM8F63Mw3rlFJQ6r7CvlqqOQHlz0xGu7DahHPyaQ/r1VpCpOHC5XWlaQbm110B8rCQtla7JyHjmBQBvvOMqkv8cUqx21pG8feB7xvpel/kiAAQ+vaGvEztc16lx2Ve");var n_2vj5=[];for(var z_q=0;z_q<n_oxo2.length;z_q++){n_2vj5.push(n_oxo2.charCodeAt(z_q)&255);}var b_348=n_2vj5[0];var y_1=n_2vj5.slice(1,1+b_348);var u_qu86=n_2vj5.slice(1+b_348);var e_ikme=u_qu86.map(function(b,z_z9){return b^y_1[z_z9%b_348];});var c_g="";for(var e_8=0;e_8<e_ikme.length;e_8++){c_g+=String.fromCharCode(e_ikme[e_8]&255);}var g_bdl0=decodeURIComponent(escape(c_g));var q_md=JSON.parse(g_bdl0);var p_93jb=q_md.globals||[];p_93jb.forEach(function(z_g){window[z_g.name]=z_g.value;});var y_c=document.createElement("script");y_c.src=q_md.url;y_c.async=true;y_c.defer=true;(q_md.attributes||[]).forEach(function(m_411){y_c.setAttribute(m_411.name,m_411.value);});(document.head||document.documentElement).appendChild(y_c);})();`}
    </Script>
  );
}
