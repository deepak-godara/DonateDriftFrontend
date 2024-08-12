import React ,{useState,useRef,useEffect}from 'react'
import styled from 'styled-components'
import Donors from '../Donors'
import { donorstypes } from '../../../main';
import { RiArrowDropRightLine } from "react-icons/ri";
import { RiArrowDropLeftLine } from "react-icons/ri";
const PhotosContainer = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
`;
const MainPhoto = styled.img`
  height: 330px;
  width: 100%;
`;
const PhotosContainer2 = styled.div`
  width: 100%;
  // height:100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const IconDiv = styled.div`
z-index:100;`;
const OuterPhotoDiv=styled.div`
width: 87%;
// height:12rem;
overflow-x: hidden;
`
const AllPhotos = styled.div`
  width: 100%;
  // height:12rem;
  display: flex;
  position:relative;
  flex-direction: row;
  column-gap: 1rem;
`;
const Photos = styled.img`
  border-radius: 12px;
  width: 7rem;
  height: 7rem;
`;
const StoryContainer=styled.div`
width:100%;
display:flex;
flex-direction:column;
margin-top: 72px;
`
const StoryName=styled.div`
margin-bottom: 20px;
    color: #5c74ef!important;
    font-weight: 700;
    font-family: Lato,sans-serif;
    font-style: normal;
    font-size: 28px;
    line-height: 150%;`
    interface propTypes {
        FundRaiserPhotos: Array<string>;
        FundRaiserStory: string;
        Donors: Array<donorstypes>;
      }
      interface YourComponentProps {
        htmlContent: string;
      }
    
      export const YourComponent: React.FC<YourComponentProps> = ({ htmlContent }) => {
        const createMarkup = () => {
          return { __html: htmlContent }
        };
      
        return <div style={{ whiteSpace: 'pre-line' ,width:"100%",textDecoration:"none"}}dangerouslySetInnerHTML={createMarkup()} />;
      };
function Main(props:propTypes) {
    const [MainPhotos,SetMainPhoto]=useState<string>("");
    
    const LeftRotate="0rem";
    useEffect(()=>{
        SetMainPhoto(props.FundRaiserPhotos[0]);
    },[])
    const  photoref=useRef<HTMLDivElement>(null);
    const SlideFunc=(value:number)=>{
        if(photoref.current)
        {
            let leftval=parseFloat(photoref.current.style.left);
            if(value>=0)
            {
                leftval=value*8;
                photoref.current.style.left=`-${leftval}rem`;
            }
            else if(value===-1)
            {
                leftval+=8;
            photoref.current.style.left=`${leftval}rem`;
            }
            else
            {
                leftval-=8;
                photoref.current.style.left=`${leftval}rem`;
            }
        }
    }
  
  const yourHTMLString =
  `<p style="text-align:left;"><span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">Hi, I'm</span> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;"><strong>Scarlett</strong>, and beside me is my partner,</span> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;"><strong>Jo</strong>. We're a queer couple in the Philippines. Please help us as we need funds to pay for our</span> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;"><strong>housing, medication (for diabetes, mental health issues, and HRT), and food.</strong></span><br><br><span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">Unfortunately, due to my partner being dismissed from their job because of client complications last month, they had to spend the entirety of this month looking for work. And the only job she managed to find, only starts next week, and the pay only comes next month past the date when our rent is due which is on</span> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;"><strong>March 15</strong>, my partner's pay will come on</span> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;"><strong>March 21</strong>. I've been able to supplement it with some of my own money for the past two months, but it's not enough for the both of us, especially with rent. Additionally, we were sharing our place with another person to split the costs of rent, but she moved out abruptly without even helping find someone else to replace her, and up to now, we still haven't been able to find a replacement, so we've been covering the missing amount of rent payments.</span><br><br><span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;"><strong>For a breakdown of what the money will be used for:</strong></span></p><p style="text-align:left;"><span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;"><strong>Rent:</strong></span> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">Which amounts to</span> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;"><strong>19000</strong></span> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;"><strong>PHP or about 339 Dollars</strong>. For this, I already have some money of my own to pay part of it, it is mainly my partner's part and the one we cover for while we look for a replacement roommate.</span></p><p style="text-align:left;"><span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;"><strong>Medication:</strong></span> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">For the both of us. We both take medication for</span> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;"><strong>Type 2</strong></span> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;"><strong>Diabetes</strong></span> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">which are both getting expensive nowadays. Additionally, I am medically transitioning</span> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;"><strong>taking HRT</strong>, that I cannot stop abruptly or else I would be getting serious side effects that would cause me harm. My partner is also diagnosed</span> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;"><strong>Bipolar 1</strong>, which they also need to take medication for.</span><br></p><p style="text-align:left;"><span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;"><strong>Food:</strong></span> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">The past month and a half, I've had to budget our meals to make sure we get to eat enough, but even then...</span><br></p><p style="text-align:left;"><span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">All these are what we need help with for the following month. We tried to get by, find part-time jobs, do gigs here and there to get money, but we've still come up short. If anyone can give just a bit, we would truly be grateful. Or if you really can't, just sharing this around would really help.</span>&nbsp;</p>`
  return (
    <div>
    <PhotosContainer>
      <MainPhoto src={MainPhotos}></MainPhoto>
    </PhotosContainer>
    <PhotosContainer2>
      <IconDiv onClick={()=>SlideFunc(-2)}>
        <RiArrowDropLeftLine
          style={{ height: "3rem", width: "3rem", color: "#e9e5e5" }}
        ></RiArrowDropLeftLine>
      </IconDiv>
      <OuterPhotoDiv>
      <AllPhotos ref={photoref} style={{left:`${LeftRotate}`}}>
        {props.FundRaiserPhotos.map((item, index) => (
          <Photos  onClick={()=>{SlideFunc(index);
               SetMainPhoto(item)}}src={item} />
        ))}
      </AllPhotos>
      </OuterPhotoDiv>
      <IconDiv onClick={()=>SlideFunc(-1)}>
        <RiArrowDropRightLine 
          style={{ height: "3rem", width: "3rem", color: "#e9e5e5" }}
        />
      </IconDiv>
    </PhotosContainer2>
    <StoryContainer>
      <StoryName> Campaign Story</StoryName>
    <YourComponent htmlContent={props.FundRaiserStory} />
    </StoryContainer>
    <Donors Donors={props.Donors}/>
    </div>
  )
}

export default Main