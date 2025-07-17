export const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer flex justify-center items-center bg-green-100 p-[10px]">
        Created By ♥ 
        <a href="" target="_blank">
           Psi Byte
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
