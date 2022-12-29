import { Dispatch, SetStateAction } from "react";


type Arguments = {
  
    checkString: boolean;
    checkNum: boolean;
    checkSpace: boolean;
    checkSymb: boolean;
    caseSensitive:boolean;
    string:string
};

export const generateRegex = (
    inputdata:Arguments,
    Setregex:Dispatch<SetStateAction<string>>,
    Setresult:Dispatch<SetStateAction<string>>
    ) => {

  let regex = ["/"];
  let regexInclude = ["["];
  let combine:string

  if (
    inputdata.checkString ||
    inputdata.checkSpace ||
    inputdata.checkNum ||
    inputdata.checkSymb
  ) {
    if (inputdata.checkString) {
      regexInclude.push("a-z");
    } 
    if (inputdata.checkNum) {
      regexInclude.push("\\d");
    } 
    if (inputdata.checkSymb) {
      regexInclude.push("!-\\/:-@[-`{-~");
    } 
    if (inputdata.checkSpace) {
      regexInclude.push("\\s");
    }

    regexInclude.push("]");
 
  } else {
    regexInclude.push("\\w\\d\\s!-\\/:-@[-`{-~");
    regexInclude.push("]");
  }
  combine= regexInclude.join("")
  regex.push(combine)

  if (inputdata.caseSensitive) {
    regex.push("/g");
  } else {
    regex.push("/gi");
  }
  const match = inputdata.string.match(new RegExp(combine,`g${!inputdata.caseSensitive?"i":""}`))||[]
  Setregex(regex.join(""));
  Setresult(match.join(""))
};
