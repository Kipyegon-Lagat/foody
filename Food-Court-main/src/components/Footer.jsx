export const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer flex justify-center items-center bg-green-100 p-[10px]">
        Created By ♥ 
        <a href="https://www.linkedin.com/in/rajat-saini-2941a324b/" target="_blank">
           Rajat Saini
        </a>
        ©
        {year}
        <strong className="px-[10px]">
          Food<span> Court</span>
        </strong>
      </div>
    );
  };
  export default Footer;