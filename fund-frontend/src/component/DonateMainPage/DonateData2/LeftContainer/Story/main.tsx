import React ,{useState,useRef,useEffect}from 'react'
import styled from 'styled-components'
import Donors from '../Donors'
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
        Donors: Array<{
          Name: string;
          Date: string;
          Amount: number;
          comment: string;
        }>;
      }
      interface YourComponentProps {
        htmlContent: string;
      }
    
      const YourComponent: React.FC<YourComponentProps> = ({ htmlContent }) => {
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
        console.log("hii")
        if(photoref.current)
        {
            let leftval=parseFloat(photoref.current.style.left);
            console.log(value)
            if(value>=0)
            {
                leftval=value*8;
                photoref.current.style.left=`-${leftval}rem`;
            }
            else if(value===-1)
            {
                // leftval+=8;
                console.log(leftval)
                leftval+=8;
                console.log(leftval)
            photoref.current.style.left=`${leftval}rem`;
            }
            else
            {
                console.log(leftval)
                leftval-=8;
                console.log(leftval)
                photoref.current.style.left=`${leftval}rem`;
            }
        // console.log(photoref.current.style.left);
        }
    }
  
  const yourHTMLString =
    '<p style="text-align:left;"><span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">In the spirit of</span> <a href="https://en.wikipedia.org/wiki/Think_globally,_act_locally" target="_self"><span style="color: rgb(83,202,139);background-color: transparent;font-size: 14px;font-family: Lato, sans-serif;">Thinking Globally and Acting Locally</span></a> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">I ran the</span> <a href="http://www.theshillongtimes.com/2014/07/18/sohra-marathoners-hit-the-ground-running/" target="_self"><span style="color: rgb(83,202,139);background-color: transparent;font-size: 14px;font-family: Lato, sans-serif;">1st Sohra Marathon</span></a> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">in my homeland</span> <a href="http://meghalaya.gov.in/megportal/" target="_blank"><span style="color: rgb(83,202,139);background-color: transparent;font-size: 14px;font-family: Lato, sans-serif;">Meghalaya</span></a> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">on 17th July 2014 followed by the</span> <a href="https://www.facebook.com/runmeghalaya?fref=ts" target="_blank"><span style="color: rgb(83,202,139);background-color: transparent;font-size: 14px;font-family: Lato, sans-serif;">2nd Sohra Cherrapunjee Marathon</span></a> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">on 17th July 2015 to raise awareness about the impact of global climate change on our planet and to inspire local action for protecting our beautiful</span> <a href="http://www.scotsman.com/news/travel-shillong-india-scotland-of-the-east-1-3481504" target="_self"><span style="color: rgb(83,202,139);background-color: transparent;font-size: 14px;font-family: Lato, sans-serif;">Scotland of the East</span></a> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">and keeping it clean and green for generations to come.</span></p>\n<p style="text-align:left;"></p>\n<p style="text-align:left;"><span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">My mission is to create long term</span> <a href="https://www.youtube.com/watch?v=VbCKXAwmbEw" target="_self"><span style="color: rgb(83,202,139);background-color: transparent;font-size: 14px;font-family: Lato, sans-serif;">sustainable development</span></a> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">projects by planting rubber trees in depleted and under utilised land combined with inter cropping fruits crops like pineapples, bananas and oranges in open spaces using an organic integrated farming system. To make the project more sustainable we will integrate beekeeping to produce organic jungle honey combined with poultry, piggery and fisheries so we can produce good organic food for all our visitors coming for agri and eco tourism to support our</span> <a href="https://www.youtube.com/watch?v=KA2UWahugxY" target="_self"><span style="color: rgb(83,202,139);background-color: transparent;font-size: 14px;font-family: Lato, sans-serif;">eco village project</span></a><span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">.</span></p>\n<p style="text-align:left;"><span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">This project is located in</span> <a href="https://www.youtube.com/watch?v=tgeKsn4c3aM" target="_self"><span style="color: rgb(83,202,139);background-color: transparent;font-size: 14px;font-family: Lato, sans-serif;">Raid Sakra</span></a> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">near the border areas of</span> <a href="https://en.wikipedia.org/wiki/Assam" target="_self"><span style="color: rgb(83,202,139);background-color: transparent;font-size: 14px;font-family: Lato, sans-serif;">Assam</span></a> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">but within</span> <a href="https://en.wikipedia.org/wiki/Ri-Bhoi_district" target="_self"><span style="color: rgb(83,202,139);background-color: transparent;font-size: 14px;font-family: Lato, sans-serif;">Ri Bhoi District</span></a> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">in my home state Meghalaya where the local farmers living in the 3 pilot villages close to the</span> <a href="https://www.youtube.com/watch?v=IOTVXpwDisA" target="_self"><span style="color: rgb(83,202,139);background-color: transparent;font-size: 14px;font-family: Lato, sans-serif;">agroforestry project</span></a> <span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">site are now engaged full time in our ground operations. They project is aimed at reducing poverty by creating a safe working environment with meaningful employment opportunities for these local farmers.</span></p>\n<p style="text-align:left;"><span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">The outcomes from our ground operations are the following:</span></p>\n<p style="text-align:left;"><span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">* Direct employment of 50 families from the 3 target villages in project area.</span></p>\n<p style="text-align:left;"><span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">* Rubber trees and pineapples have being planted at part of Phase 1 of project.</span></p>\n<p style="text-align:left;"><span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">* Capacity building and training workshops for local managers from villages completed.</span></p>\n<p style="text-align:left;"><span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">* Community engagement in the agroforestry project from the 3 target villages.</span><span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: lato, "sans-serif;">* Awareness generation for the public on climate change mitigation and adaptation.</span></p>\n<p style="text-align:left;"></p>\n<p style="text-align:left;"><span style="color: rgb(121,135,152);background-color: rgb(255,255,255);font-size: 14px;font-family: Lato, sans-serif;">So if you would like to support my Mission in Meghalaya - the land where the clouds come home by supporting our agroforestry integrated farming project please make a donation on this crowd funding page. This campaign will continue beyond my run Vitality London 10 km run on 10th July 2016.</span></p>\n<p style="margin-left:0px;"><span style="color: rgb(121,135,152);font-size: 14px;font-family: Lato, sans-serif;"><strong>The future belongs to those who believe in the beauty of their dreams - Eleanor Roosevelt</strong></span></p>\n'
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
    <YourComponent htmlContent={yourHTMLString} />
    </StoryContainer>
    <Donors Donors={props.Donors}/>
    </div>
  )
}

export default Main