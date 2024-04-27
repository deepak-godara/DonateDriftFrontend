import React from "react";
import styled from "styled-components";
import { useCombobox } from "downshift";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { RiArrowDropDownLine } from "react-icons/ri";
interface SelectWidth {
  $width: string;
}
const MainContainer = styled.div<SelectWidth>`
  width: ${(props) => `${props.$width}`};
  display: flex;
  position: relative;
  
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 0.5rem;
`;
const SelectLabel = styled.label`
  color: #2f435a;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
`;
interface InputColot{
  $valid:boolean
}
const SelectButton = styled.button<InputColot>`
  width: 100%;
  position: relative;
  border:${(props) => (props.$valid?"1px solid #eaebee":"1px solid red")};
  padding: 0.5rem;
  margin-top:0.3rem;
  font-size: 16px;
  line-height: 170%;
  color: #2f435a;
  // height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0px 9px 20px;
  border-radius: 12px;
  background: none;
`;
const DropIcon = styled(MdOutlineKeyboardArrowDown)`
  color: #2f435a;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-family: "3icon";
  font-style: normal;
  font-weight: 400;
  width: 2rem;
  height: 2rem;
`;
const DropDown = styled.ul`
  position: absolute;
  left: -1px;
  z-index:1000;
  right: -1px;
  top: calc(80% + 5px) !important;
  bottom: auto !important;
  background: #fff;
  box-sizing: border-box;
  border-radius: 8px;
  // display:flex;
  flex-direction: column;
  row-gap: 0.3rem;
  padding: 0.5rem 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  max-height: 365px;
  overflow: auto;
  max-height: 240px;
  overflow: auto;
  overflow-x: hidden;
  list-style: none;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #eaebee;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: white; /* Color of the scrollbar track */
  }
  background: #fff;
`;
const CategoryDiv = styled.div`
  color: black;
  font-size: 19px;
  font-weight:500;
`;
const ListItem = styled.li`
  font-size: 16px;
  line-height: 1.5;
  padding: 0.2rem 0.5rem;
  color: #2f435a;
  // position: static!important;
  transform: translate(0) !important;
`;
interface proptypes {
  item: Array<String>;
  label: String;
  type:string;
  width?:string;
  value:string;
  valid:boolean;
  ChangeFunc:(value:string,type:string)=>void;
}
function Select(props: proptypes) {
  // const items=["s","ewr","345"]
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
    getInputProps,
    closeMenu,
    highlightedIndex,
  } = useCombobox({
    items: props.item,
    onSelectedItemChange: (changes) => {
      closeMenu();
      // Call your function here
      const value = changes.selectedItem;
      if(typeof value=="string")
      props.ChangeFunc(props.type,value)
    },
  });

  return (
    <MainContainer {...getToggleButtonProps()} $width={props.width?props.width:"300px"}>
      <SelectLabel>{props.label}</SelectLabel>
      <SelectButton $valid={props.valid}>
        {props.value!==""?props.value:"Please Select"}
        <DropIcon></DropIcon>
      </SelectButton>
      <input style={{display:"none"}}
        {...getInputProps({
        })}
      />
      <DropDown
        {...getMenuProps()}
        style={{ listStyle: "none", display: isOpen ? "flex" : "none" }}
      >
        {isOpen && (
          <>
            <CategoryDiv>Select the Category</CategoryDiv>
            {props.item.map((item, index) => (
              <ListItem
                {...getItemProps({
                  key: index,
                  index,
                  item,
                  style: {
                    backgroundColor:
                      highlightedIndex === index||selectedItem === item ? "#d9e6f5" : "white",
                    fontWeight: selectedItem === item ? "bold" : "normal",
                  },
                })}
              >
                {item}
              </ListItem>
            ))}
          </>
        )}
      </DropDown>
    </MainContainer>
  );
}

export default Select;
