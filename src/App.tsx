import React, { useRef } from "react";
import {
   Grommet,
   Page,
   Header,
   Text,
   PageContent,
   Box,
   Avatar,
   Heading,
   Paragraph,
   Anchor,
   Button,
   Layer,
   TextInput,
   TextArea,
   ThumbsRating,
   Grid,
} from "grommet";
import {
   Reactjs,
   Js,
   Linkedin,
   Redo,
   Mail,
   Github,
   Send,
   Location,
   ChatOption,
} from "grommet-icons";
import theme from "./theme";
import { EvansSpan, StyledHeaderSpan, StyledSpan } from "./utils/StyledSpan";
import PostCardLocation from "./components/HelloFromPS";
import styled from "styled-components";
import ContactLayer from "./components/ContactLayer";
import ProjectsTable from "./components/ExperienceDataTable";
import DarkThemeSwitch from "./components/DarkThemeSwitch";
import { ToastProvider, useToast } from "./utils/ToastUtils";
import ContactGrid from "./components/ContactGrid";
import LocationDrop from "./components/LocationDrop";
import useMediaQuery from "./hooks/UseMediaQuery";
import TechnologyStack from "./components/TechnologyStack";
import DancingImage from "./components/DancingEasterEgg";

const AppContainer = styled.div`
   position: relative;
`;

const App = () => {
   const [contactSevan, setContactSevan] = React.useState(false);
   const [dark, setDark] = React.useState(false);

   // Location Drop
   const [locationDrop, setLocationDrop] = React.useState(false);
   const boxRef = useRef<any | null>(null);

   // Mobile page padding & sizing
   const { isMobile } = useMediaQuery();
   const mobilePad = isMobile ? "large" : "none";
   const mobileHeading = isMobile ? "large" : "medium";
   const mobileHeadingLevel = isMobile ? 2 : 3;

   // Dancing Easteregg
   const [dancing, setDancing] = React.useState(false);

   return (
      <Grommet full theme={theme} themeMode={dark ? "light" : "dark"}>
         <ToastProvider>
            {/* <AppContainer> */}
            <Header
               align="center"
               direction="row"
               flex={false}
               justify="between"
               gap="medium"
               pad="xsmall"
               sticky="scrollup"
               style={ 
					dark
					 ? {
							  backdropFilter: "blur(5.5px)",
							  WebkitBackdropFilter: "blur(8.5px)",
						}
                     : {
                          //background: "rgba(255, 255, 255, 0.3)",
                          backdropFilter: "blur(5.5px)",
                          WebkitBackdropFilter: "blur(8.5px)",
                          //border: "1px solid rgba(255, 255, 255, 0.18)",
                       }
					   
				}

  
            >
               <Heading color="collaborator" margin={{ left: "small", top: "none" }} size="small">
                  John Conover's cool project website 
               </Heading>
			   <DarkThemeSwitch dark={dark} setDark={setDark} />
            </Header>

            <Page kind="narrow">
               <PageContent pad={mobilePad} flex="grow">
                  <Box align="baseline" justify="between" direction="row">
                     <Box align="start" justify="center" gap="medium" wrap>
                        <Box
                           align="center"
                           justify="center"
                           direction="row"
                           gap="medium"
                           pad={{ horizontal: "large" }}
                        >
                           <Avatar
                              align="left"
                              flex={false}
                              justify="center"
                              overflow="hidden"
                              round="full"
                              size="2xl"
                              src="https://firebasestorage.googleapis.com/v0/b/bodymx-80bc1.appspot.com/o/profilePictures%2FW0xdrFJk8BPiLv93iwv5n7sZleH2?alt=media&token=fd5d2a17-462f-4350-ba6c-6fa10c3b47e9"
                           />
                           <Box align="start" justify="start" fill>
                              <Heading margin="none">John</Heading>
                              <Heading
                                 margin={{
                                    left: "medium",
                                    vertical: "none",
                                    top: "none",
                                    bottom: "none",
                                 }}
                              >
                                 Conover
                              </Heading>
                           </Box>
							<ContactGrid setContactSevan={setContactSevan} />
						</Box>
                        <Box align="start" justify="between" wrap direction="column" gap="small">
                           <Paragraph
                              size="large"
                              margin={{ vertical: "xsmall" }}
                              color="text-paragraph"
                           >
                              I'm John Conover, a computer{" "}
                              engineering graduate from Loyola Chicago. &{" "}
                              Here are some of the projects I've worked on in the past {" "}
                           </Paragraph>
                           
                        </Box>
                        {isMobile && (
                           <Box
                              align="center"
                              justify="center"
                              flex
                              fill="horizontal"
                              margin={{ vertical: "small" }}
                              focusIndicator={false}
                           >
                              <Button
                                 primary
                                 icon={<ChatOption />}
                                 label="let's talk"
                                 onClick={() => setContactSevan(true)}
                              />
                           </Box>
                        )}
                     </Box>
                     {!isMobile && (
                        <Box align="center" justify="center" flex fill="horizontal">
                           <Anchor label="let's talk" onClick={() => setContactSevan(true)} />
                        </Box>
                     )}
                  </Box>
                  <Box
                     align="center"
                     justify="center"
                     margin={{ top: "small" }}
                     border={{ color: "active-background", side: "top", size: "small" }}
                     gap="small"
                  >
				  
                     <Box align="start" justify="center" fill="horizontal">
                        <Heading level={mobileHeadingLevel} size="large" >
							Experience
						</Heading>
						
						<ProjectsTable />
						
						<Heading
                           level={mobileHeadingLevel}
                           margin={{ vertical: "small" }}
                           size="large"
                        >
                           Projects
                        </Heading>

                        <Paragraph
                           size="large"
                           margin={{ vertical: "xsmall" }}
                           fill
                           color="text-paragraph"
                        >
                           im insane! I'm deranged! don't let me near you! I will 
                           kill you!{" "}
                           Im mixed race chinese/white, can I say slurs for both or neither?{" "}
                           If I rubbed a magic lamp and a genie popped out, I would have a few{" "}
                           wishes. One of these wishes would be that league of legends would 
						   never have {" "}
                           been created. The next wish would be for all food to taste really good. My last
						   and final wish would be big muscles. oh wait, I already{" "}
                           have big muscles. 
                        </Paragraph>
                     </Box>
                  </Box>

                  <Box
                     align="center"
                     justify="center"
                     margin={{ top: "small" }}
                     border={{ color: "active-background", side: "top", size: "small" }}
                     gap="medium"
                  >
                     <Box align="start" justify="center" fill="horizontal">
                        <Heading
                           level={mobileHeadingLevel}
                           margin={{ vertical: "small" }}
                           size="medium"
                        >
                           Contact
                        </Heading>
                        <Paragraph
                           size="large"
                           margin={{ vertical: "xsmall" }}
                           fill
                           color="text-paragraph"
                        >
                           i'm screaming i'm creaming eating carpet my wife is leaving
                        </Paragraph>
                     </Box>
   
                  </Box>
               </PageContent>
               {contactSevan && <ContactLayer setContactSevan={setContactSevan} />}
               {locationDrop && (
                  <LocationDrop
                     setLocationDrop={setLocationDrop}
                     locationDrop={locationDrop}
                     boxRef={boxRef}
                  />
               )}
               {dancing && <DancingImage />}
            </Page>
            {/* <PostCardLocation /> */}
            {/* </AppContainer> */}
         </ToastProvider>
      </Grommet>
   );
};

export default App;
