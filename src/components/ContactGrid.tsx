import React from "react";
import { Grid, Box, Text, AnchorType, Anchor } from "grommet";
import { Linkedin, Mail, Github } from "grommet-icons";
import { useToast } from "../utils/ToastUtils";
function ContactGrid({ setContactSevan }) {
   const { showToast } = useToast();

   const handleToastNotif = (alertLevel, label, description, duration, actions) => {
      showToast({
         alertLevel: alertLevel,
         label: label,
         description: description,
         duration: duration,
         actions: actions,
      });
   };
   return (
      <Grid fill="vertical" gap="small" columns="195px">
         <Box
            align="center"
            justify="between"
            width={{ min: "350px", max: "fill" }}
            height="xxsmall"
            background={{ color: "graph-3", opacity: "strong" }}
            pad="small"
            direction="row"
            gap="small"
            round="xsmall"
            onClick={() => {
               window.open("https://www.linkedin.com/in/john-conover-628567258/", "_blank");
               handleToastNotif("normal", "Redirecting...", "Taking you to Linkedin!", 5000, [
                  {
                     onClick: () => {},
                     label: "Let's go!",
                  },
               ]);
            }}
         >
            <Box align="center" justify="center" direction="row" gap="small">
               <Linkedin />
               <Text weight="normal" size="large">
                  John Conover
               </Text>
            </Box>
         </Box>
         
         <Box
            align="center"
            justify="between"
            width={{ min: "350px", max: "fill" }}
            height="xxsmall"
            background={{ color: "dark-2", opacity: "strong" }}
            pad="small"
            direction="row"
            gap="small"
            round="xsmall"
            onClick={() => {
               window.open("https://www.github.com/alalalsam", "_blank");
               handleToastNotif("normal", "Redirecting...", "Taking you to Github!", 5000, [
                  {
                     onClick: () => {},
                     label: "Let's go!",
                  },
               ]);
            }}
         >
            <Box align="center" justify="center" direction="row" gap="small">
               <Github />
               <Text weight="normal" size="large">
                  @alalalsam
               </Text>
            </Box>
         </Box>
      </Grid>
   );
}

export default ContactGrid;
