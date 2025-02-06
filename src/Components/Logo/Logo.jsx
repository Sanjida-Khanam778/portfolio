import PropTypes from "prop-types";

const Logo = ({whiteLogo}) => {
  return (
    <div>
      <div className=" flex items-center">
        <img className={`h-8 w-8 md:h-12 md:w-12 ${whiteLogo&&"brightness-0 invert"}` }src="https://i.imgur.com/pZLDPsa.png" alt="" />
         
        
      </div>
    </div>
  );
};
Logo.propTypes = {
      whiteLogo:PropTypes.bool
}
export default Logo;
