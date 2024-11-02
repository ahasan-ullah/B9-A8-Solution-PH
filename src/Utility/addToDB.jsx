const getStoredList=(btn)=>{
  const storedListStr=localStorage.getItem(`${btn}`);
  if(storedListStr){
    const storedList=JSON.parse(storedListStr);
    return storedList;
  }
  else{
    return [];
  }
}

const addToStoredList=(id,btn)=>{
  const storedList=getStoredList(btn);
  if(storedList.includes(id)){
    alert('Already Exists')
  }
  else{
    storedList.push(id);
    const storedListStr=JSON.stringify(storedList);
    localStorage.setItem(`${btn}`,storedListStr);
  }
}

export {addToStoredList,getStoredList};