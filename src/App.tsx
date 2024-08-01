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
					<PageContent pad={{ bottom: 'large' }} flex="grow">
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
								Here's a couple projects I've worked on for fun or otherwise. I tried to order them from least to most
								unhinged, so don't scroll down too far if you're just here to evaluate my talents.
							</Paragraph>
						</Box>

						<ProjectBlock 
							heading="MLPerf Tiny inference on 3ds" 
							video="https://www.youtube.com/embed/OHeZvUHVpf4?si=Yt5bs96ExDIlWa_v"
							content={[`I'm currently developing universal 3d-mode support for any application 
									running on the 3ds, and this was the first foray into seeing whether or not 
									that was possible. Currently, the most viable path to universal 3D involves using ML 
									to predict steroscopic image pairs, then displaying the generated image pair along with 
									the original using the 3ds gpu stack. I've tested displaying predicted image pairs on 
									the 3ds, and it works surprisingly well. If you're curious about learning how the 3ds' 3d display works, the website [here](https://gbatemp.net/threads/better-stereoscopic-3d-patches-cheat-codes-releases-development-and-discussion.625945/) 
									has a pretty good explanation
									`,
									`Anyways, for this project I used TVM to cross-compile the MLPerf Tiny Visual Wake Words
									model for inference on the 3ds, with some help from a tutorial on the TVM website. 
									Since the 3ds homebrew development environment is literally hacky, completing this 
									project taught me a lot about what exactly is involved in running applications on 
									different platforms. `]}
						/>
					
						<ProjectBlock 
							heading="Coapt Internship Project" 
							picture="/projectphotos/coaptproj.png"
							content={`At Coapt, I had to evaluate proof-of-concept for a low power bluetooth device.
									When I got there, the device wasn't running to spec, so I was put in charge of writing 
									drivers for one of the components they swapped out on the device. This was my first exposure
									to embedded systems and using C extensively, so it took me a little while to get into the 
									swing of things. Once I got comfortable coding though, I implemented their requested functionality, 
									and even threw together a couple test scripts that I could flash onto the device to make 
									testing a little easier for the hardware guys.`} 
						/>
						
						<ProjectBlock 
							heading="3ds Dataset Building Utility" 
							video="https://www.youtube.com/embed/y00-irguHc4?si=Oef4jmxugdEvjqEv"
							content={[ `This is a homebrew 3ds program that I'm using to make me a machine learning
									dataset. It employs multithreading to collect stereoscopic 3D image pairs every few seconds.
									Initially, I had a working version in 2 days, but this version would freeze gameplay for a quarter second
									every time It saved the screenshot to memory. I hated this a lot, so I spent
									2 weeks working on a multithreading implementation to write the screenshots
									in a way that wouldn't interrupt gameplay.
									`,  
									`Employing multithreading wasn't 
									too difficult, but I had an issue where, for one of my image pairs, the leftmost column of pixels 
									would be missing, and the rightmost would be full of noise. Initially, 
									I thought this was an issue with which address my 
									code was reading from, but that wasn't the case.
									What was happening was that whenever the left stereoscopic image pair was written
									to cache, the dummy variables used during that operation were located in the addresses
									directly after the first screenshot's location, which overwrote the start of 
									the second screenshot. To fix this, I allocated an extra
									column of pixels in cache, and offset the writing of the right image pair by that column.
									The extra column I allocated would then be filled with the dummy values, and the 
									right view's data would remain untouched.`]}
						/>
						
						<ProjectBlock 
							heading="Robotic Robot" 
							video="https://www.youtube.com/embed/8rsJ4EK5T5A?si=zn7XlyMivoR2mHAf"
							content={[`In high school I participated in FIRST robotics competition, and this is the robot 
									we made during my senior year. At this point our team was working out of 2 garages 
									and a shipping container, and we had barely 10-ish people on the team that were 
									actually useful. I was in charge of building all the electronics and pneumatics, 
									and everyone else did everything else. This was also the first year we had 2 
									working robots in time for competition (1 for competition and 1 for practice),
									which was frankly astounding given our circumstances.`,
									`When this bot was designed the designer didn't designate any space for electronics
									so I ended up cutting our control systems in half, zip-typing them to the sides of the bot,
									and routing all our wires through the bottom, making sure they don't get snagged 
									on any belts, gears, motors or gamepieces they might come very close to. This was 
									especially challenging because our driver was a crazed maniac who filled his days and nights
									with vyvanse-fueled ranked overwatch gameplay, and we encouraged him. One competition
									our team swapped out the wheels on the bot so that he could ram into other people 
									with more force. It was hilarious to watch, but I had to make sure the lengths 
									and tolerances of my wiring could endure tons of violence before they failed.`]}  
						/>
						
						<ProjectBlock 
							heading="Hilarious Website" 
							recursiveWindow={true}
							content={`I'm pretty mad because whoever implemented the web stack at 
									Netlify made it so that you can't display your own website from 
									within an Iframe more than once. This section was supposed to be 
									a funny joke where I tell you "you can't scroll any further until 
									you scroll down all the way in the website window," and then it would 
									trap you into a recursive loop where you have to keep scrolling 
									for like 50 layers deep of this website. The closest I can get 
									is if I put in the wrong url, then the Netlify 404 page has a link
									to take you back to this website, but even then it stops rendering 
									all embeds like 10 layers deep. `}  
						/>
						
						<ProjectBlock 
							heading="Shrek Can Feel Your Heart Beating" 
							video="https://www.youtube.com/embed/wUvs6uQ3bXE?si=fj_UPsB4YRjiMH-P"
							content={`Here's a project I was forced to do at gunpoint during my time 
									at the University. This is a MSP430 that takes an input ECG 
									signal on 2 pins, then isolates and displays the signal on the 
									display. Later on in my instruction we hooked up electrodes to 
									our makeshift cardiographs and measured our own heart rate, which was 
									cool. I had to encode and display a random picture on the 
									screen too, to prove to my overseers that I could understand how 
									displays work at a low level. `}
						/>
						
						<ProjectBlock
							heading="Gun"
							picture="/projectPhotos/gun.JPG"
							content={`I was bored in engineering class one day, so I went into our 
									shipping container full of trash and made this gun out of garbage.
									It uses a cannibalized power drill to power a compressor which 
									builds pressure. It then uses a solenoid to dump that pressure. 
									Unfortunately, the solenoids we had couldn't dump all pressure
									at once and the valves we had that could were already being used
									by more useful projects, so the gun couldn't hurt anyone unless you
									hit them with it. Kicking my fellow classmates was easier and 
									more effective anyways so it ended up being used for
									testing which pistons in our shipping container full of trash worked.
									Unlucky!`}
						/>
						
						<ProjectBlock
							heading="The End"
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
