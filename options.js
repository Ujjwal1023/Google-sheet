const activeCellElement=document.getElementById("active-cell");
const textAlignElements=document.getElementsByClassName("text-align");
const boldButton=document.getElementById("bold");
const italicButton=document.getElementById("italic");
const underlinedButton=document.getElementById("underlined");

let activeCell=null;

// const defaultOptionsState={
//     fontFamily: "",
//     isBoldSelected:false,
//     isItalicSelected:false,
//     isUnderLineSelected:false,
//     testAlign:"left",
//     textColor:"#000",
//     backgroundColor:"#fff",
//     fontSize:14,

// };

let activeOptionsState;

function toggleButtonsStyle(button,isSelected){
    if(isSelected ){
     
        button.classList.add("active-option");
    }
else{
    button.classList.remove("active-option");
} 
}

function highlightOptionButtonsOnFocus(){
    // if(activeOptionsState.isBoldSelected ){
     
    //         boldButton.classList.add("active-option");
    //     }
    // else{
    //     boldButton.classList.remove("active-option");
    // }

    toggleButtonsStyle(boldButton,activeOptionsState.isBoldSelected);

    // if(activeOptionsState.isItalicSelected){

    //     italicButton.classList.add("active-option");
    // }
    // else{
    //     italicButton.classList.remove("active-option");
    // }

    toggleButtonsStyle(italicButton,activeOptionsState.isItalicSelected);

    // if(activeOptionsState.isUnderLineSelected){
    //     underlinedButton.classList.add("active-option");
    // }
    // else{
    //     underlinedButton.classList.remove("active-option");
    // }

    toggleButtonsStyle(underlinedButton,activeOptionsState.isUnderLineSelected);

    highlightTextAlignButtons(activeOptionsState.textAlign);

}

function onCellFocus(e){
    if(activeCell && activeCell.id===e.target.id){
        return;
    }
    activeCell=e.target;
    activeCellElement.innerText=e.target.id;

    const computedStyle =getComputedStyle(activeCell);
    console.log(computedStyle);

 activeOptionsState={
fontFamily:computedStyle.fontFamily,
isBoldSelected:computedStyle.fontWeight==="600",
isItalicSelected:computedStyle.fontStyle==="italic",
isUnderLineSelected:computedStyle.textDecoration.includes("underline"),
testAlign:computedStyle.textAlign,
textColor:computedStyle.color,
backgroundColor:computedStyle.backgroundColor,
fontSize:computedStyle.fontSize,
    };

    highlightOptionButtonsOnFocus();
    
}
function onClickBold(boldButton){
    boldButton.classList.toggle("active-option");
    if(activeCell){
    
     if(activeOptionsState.isBoldSelected===false){
        activeCell.style.fontWeight="600";
        
     }    
     else{
        activeCell.style.fontWeight="400";
        
     }
     activeOptionsState.isBoldSelected= !activeOptionsState.isBoldSelected;
    }
}
function onClickItalic(italicButton){
    italicButton.classList.toggle("active-option");
    if(activeCell){
        if(activeOptionsState.isItalicSelected){
            activeCell.style.fontStyle="normal";
           
        }
        else{
            activeCell.style.fontStyle="italic";
        }
        activeOptionsState.isItalicSelected= !activeOptionsState.isItalicSelected;
        }
    }

    function onClickUnderline(underlinedButton){
        underlinedButton.classList.toggle("active-option");  
        if(activeCell){
            if(activeOptionsState.isUnderLineSelected){
                activeCell.style.textDecoration="none";
               
            }
            else{
                activeCell.style.textDecoration="underline";
            }
            activeOptionsState.isUnderLineSelected= !activeOptionsState.isUnderLineSelected;
            }

    }

    function highlightTextAlignButtons(textAlignValue){
      
       
       for(let i=0;i<textAlignElements.length;i++){
        if(textAlignElements[i].getAttribute("data-value")===textAlignValue){
            textAlignElements[i].classList.add("active-option");
        }
        else{
            textAlignElements[i].classList.remove("active-option");
        }
       }
    }

    function onClickTextAlign(textAlignButton){
        let selectedValue=textAlignButton.getAttribute("data-value");
        highlightTextAlignButtons(selectedValue);


        if(activeCell){
            activeCell.style.textAlign=selectedValue;
            activeOptionsState.textAlign=selectedValue;
        }
    }

    function onChangeTextColor(textColorInput){
     let selectedColor=textColorInput.value;
    if(activeCell){
        activeCell.style.color=selectedColor;
        activeOptionsState.color=selectedColor;
    }
    }

    function onChangeBackgroundColor(textColorInput){
        let selectedColor=textColorInput.value;
       if(activeCell){
           activeCell.style.backgroundColor=selectedColor;
           activeOptionsState.backgroundColor=selectedColor;
       }
       }
