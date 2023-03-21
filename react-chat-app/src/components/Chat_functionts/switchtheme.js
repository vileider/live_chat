const switchTheme = (dark_mode) => {
    if (!dark_mode)  {
      return "light_mode";
    } else if (dark_mode) {
      return "dark_mode";
    }
  };
export default switchTheme;