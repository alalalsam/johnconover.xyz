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
   Image,
   Video,
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
import ProjectBlock from "./components/ProjectBlock";

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
					  Cool project website 
				   </Heading>
				   <DarkThemeSwitch dark={dark} setDark={setDark} />
				</Header>

				<Page kind="narrow">
					<PageContent pad={mobilePad} flex="grow">
						<Box align="baseline" justify="between" direction="row">
							<Box align="start" justify="center" gap="medium" wrap>
								<Box
								   align="left"
								   justify="center"
								   direction="row"
								   gap="medium"
								   pad={{ horizontal: "small" }}
								>
									<Avatar
									  align="center"
									  flex={false}
									  justify="center"
									  overflow="hidden"
									  round="full"
									  size="2xl"
									  src="https://cdn.britannica.com/68/178268-050-5B4E7FB6/Tom-Cruise-2013.jpg"
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
								
								<ProjectsTable />
							
							</Box>
					 
						</Box>
						  
							<Box align="start" justify="between" wrap direction="row" gap="small" style={{ maxWidth: '100%' }}>
								<Paragraph
									size="large"
									textAlign="start"
									margin={{ vertical: "xsmall", horizontal: "xsmall" }}
									color="text-paragraph"
									style={{ maxWidth: '100%' }}
								>
									The Febreeze air freshener company and the scented candle industry are rife with strife and drama this saturday afternoon. After months of litigation and "political donations" intended 
									to maximize market capital and quash competition, new information has come to light about the secret, sinister interests of the scent product industry.
									Every single politically motivated action on both of these companies' behalf were sent to the same politician, an up-and-coming 24 year old hottie named Jasmine. As it turns out, both 
									executive boards of Febreeze and other scented candlemaking companies used their competition to mask the courting of Jasmine, who at this point in litigation has come out as lesbian.
								</Paragraph>
							</Box>
						  
							<Box
								align="center"
								justify="center"
								margin={{ top: "small" }}
								border={{ color: "active-background", side: "top", size: "small" }}
								gap="small"
							>
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
							
							<ProjectBlock 
								heading="Chinese" 
								video="https://drive.google.com/file/d/1i-vGOVOJawXr-pcAhLcj0X5wn8eMFdKF/preview"
								content="im insane! I'm deranged! don't let me near you! I will 
								kill you! Im mixed race chinese/white, can I say slurs for both or neither?
								If I rubbed a magic lamp and a genie popped out, I would have a few
								wishes. One of these wishes would be that league of legends would 
								never have been created. The next wish would be for all food to taste really good. My last
								and final wish would be big muscles. oh wait, I already
								have big muscles." 
							/>
							
							<ProjectBlock 
								heading="Chinese" 
								picture="https://www.uschina.org/sites/default/files/202210/xijinping.jpg"
								content="Chinese Chinese Chinese, anything goes, even Chinese"
							/>
							
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
