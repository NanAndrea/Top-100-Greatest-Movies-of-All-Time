import { Box,Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export function ScrollToTop() {
  const [backToTopButton, setbackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setbackToTopButton(true);
      } else {
        setbackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box >
      {backToTopButton && (
        <Tooltip title="Scroll to top" placement="top">
             <Box component="button" onClick={scrollUp}
          style={{
            position:"fixed",
            bottom:"20px",
            right:"20px",
            border:'1px solid grey',
            borderRadius: '50%',
            cursor:"pointer",
            width:"50px",
            height:"50px"
            

          }}
          variant="rounded"
          >
            <ArrowUpwardIcon color="black"/>
          </Box>
        </Tooltip>
         
       
      )}
    </Box>
  );
}
